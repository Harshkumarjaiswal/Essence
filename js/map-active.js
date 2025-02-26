// Map style configuration
const mapStyle = [
    {
        "featureType": "administrative.locality",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#2c2e33"
            },
            {
                "saturation": 7
            },
            {
                "lightness": 19
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#ffffff"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 100
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#ffffff"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 100
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#bbc0c4"
            },
            {
                "saturation": -93
            },
            {
                "lightness": 31
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#bbc0c4"
            },
            {
                "saturation": -93
            },
            {
                "lightness": 31
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#bbc0c4"
            },
            {
                "saturation": -93
            },
            {
                "lightness": -2
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#e9ebed"
            },
            {
                "saturation": -90
            },
            {
                "lightness": -8
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#e9ebed"
            },
            {
                "saturation": 10
            },
            {
                "lightness": 69
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#e9ebed"
            },
            {
                "saturation": -78
            },
            {
                "lightness": 67
            },
            {
                "visibility": "simplified"
            }
        ]
    }
];

// Initialize the map with default location (will be updated with user's location)
let map;
let userMarker = null;
let watchId = null;
const defaultLocation = { lat: 51.5074, lng: -0.1278 }; // London as fallback
const storeLocation = { lat: 51.5074, lng: -0.1278 }; // Your store location - update this!

// Function to handle location errors
function handleLocationError(error) {
    const errorMessages = {
        1: "Location access denied. Please enable location services to see your position on the map.",
        2: "Location unavailable. Please try again later.",
        3: "Location request timed out. Please try again."
    };
    
    console.warn(`Geolocation error: ${error.message}`);
    const errorMessage = errorMessages[error.code] || "Unable to get your location";
    
    // Show error message to user
    const mapDiv = document.getElementById("googleMap");
    const errorDiv = document.createElement("div");
    errorDiv.className = "location-error";
    errorDiv.style.cssText = "position: absolute; bottom: 20px; left: 50%; transform: translateX(-50%); background: rgba(255, 255, 255, 0.9); padding: 10px 20px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.2); z-index: 1;";
    errorDiv.innerHTML = errorMessage;
    mapDiv.appendChild(errorDiv);
    
    // Center on store location if geolocation fails
    map.setCenter(storeLocation);
    
    // Remove error message after 5 seconds
    setTimeout(() => errorDiv.remove(), 5000);
}

// Function to update user's location on the map
function updateUserLocation(position) {
    const userLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    };

    // Create or update user marker
    if (!userMarker) {
        userMarker = new google.maps.Marker({
            position: userLocation,
            map: map,
            icon: {
                path: google.maps.SymbolPath.CIRCLE,
                scale: 10,
                fillColor: "#4834d4",
                fillOpacity: 0.8,
                strokeWeight: 2,
                strokeColor: "#fff"
            },
            title: 'Your Location'
        });
    } else {
        userMarker.setPosition(userLocation);
    }

    // Calculate and display distance to store
    const distance = google.maps.geometry.spherical.computeDistanceBetween(
        new google.maps.LatLng(userLocation),
        new google.maps.LatLng(storeLocation)
    );
    
    const distanceKm = (distance / 1000).toFixed(1);
    document.querySelector('.contact-info .contact-address').innerHTML += 
        `<p><span>distance:</span> ${distanceKm} km from store</p>`;

    // Fit bounds to include both store and user location
    const bounds = new google.maps.LatLngBounds();
    bounds.extend(userLocation);
    bounds.extend(storeLocation);
    map.fitBounds(bounds);

    // Don't zoom in too close if the points are too close together
    const zoom = map.getZoom();
    map.setZoom(zoom > 15 ? 15 : zoom);
}

// Initialize map with loading state
function initMap() {
    // Remove loading indicator if it exists
    const loadingDiv = document.getElementById('map-loading');
    if (loadingDiv) {
        loadingDiv.style.display = 'none';
    }

    // Create map instance
    map = new google.maps.Map(document.getElementById("googleMap"), {
        zoom: 14,
        center: defaultLocation,
        scrollwheel: false,
        scaleControl: false,
        disableDefaultUI: false, // Enable default UI for better user control
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'gMap']
        }
    });

    // Apply custom style
    const mapType = new google.maps.StyledMapType(mapStyle, { name: "Grayscale" });
    map.mapTypes.set('gMap', mapType);
    map.setMapTypeId('gMap');

    // Add store marker
    const storeMarker = new google.maps.Marker({
        position: storeLocation,
        map: map,
        icon: 'img/core-img/pin.png',
        title: 'Our Store'
    });

    // Add store info window
    const storeInfo = new google.maps.InfoWindow({
        content: `
            <div style="padding: 10px;">
                <h4 style="margin: 0 0 5px;">Essence Store</h4>
                <p style="margin: 0;">10 Suffolk st Soho, London, UK</p>
                <p style="margin: 5px 0 0;">Tel: +12 34 567 890</p>
            </div>
        `
    });

    storeMarker.addListener('click', () => {
        storeInfo.open(map, storeMarker);
    });

    // Try to get user's location and watch for changes
    if (navigator.geolocation) {
        // Get initial location
        navigator.geolocation.getCurrentPosition(
            updateUserLocation,
            handleLocationError,
            {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            }
        );

        // Watch for location changes
        watchId = navigator.geolocation.watchPosition(
            updateUserLocation,
            handleLocationError,
            {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            }
        );
    } else {
        handleLocationError({ 
            code: 0, 
            message: 'Geolocation is not supported by this browser'
        });
    }
}

// Cleanup function to stop watching location when page is unloaded
window.addEventListener('beforeunload', () => {
    if (watchId !== null) {
        navigator.geolocation.clearWatch(watchId);
    }
});

// Initialize map when the page loads
window.addEventListener('load', initMap);