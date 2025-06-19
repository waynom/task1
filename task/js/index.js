function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 }, // Replace with your desired coordinates
        zoom: 8, // Adjust the zoom level
    });

    // Optional: Add a marker
    const marker = new google.maps.Marker({
        position: { lat: -34.397, lng: 150.644 },
        map: map,
        title: "My Location",
    });
}