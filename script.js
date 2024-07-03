function goToGoogleMaps() {
    let originalLat = parseFloat(document.getElementById('latitude').value);
    let originalLng = parseFloat(document.getElementById('longitude').value);
    const tuple = document.getElementById('tuple').value;
    const maxdistanceKm = parseFloat(document.getElementById('distance').value);

    if (tuple) {
        const match = tuple.match(/\(([^,]+),\s*([^)]+)\)/);
        if (match) {
            originalLat = parseFloat(match[1]);
            originalLng = parseFloat(match[2]);
        } else {
            alert("Bitte geben Sie ein gültiges Koordinaten-Tupel ein.");
            return;
        }
    } else {
        if (isNaN(originalLat) || isNaN(originalLng)) {
            alert("Bitte geben Sie gültige Koordinaten ein.");
            return;
        }
    }

    if (isNaN(maxdistanceKm) || maxdistanceKm <= 0) {
        alert("Bitte geben Sie eine gültige Distanz ein.");
        return;
    }

    const angleDegrees = Math.random() * 360;
    const angleRadians = angleDegrees * (Math.PI / 180);

    const R = 6371.0;

    const distanceKm = (Math.random() * (maxdistanceKm - (-maxdistanceKm))) + (-maxdistanceKm);

    const deltaLat = (distanceKm / R) * Math.cos(angleRadians);
    const newLat = originalLat + (deltaLat * (180 / Math.PI));

    const deltaLng = (distanceKm / (R * Math.cos(originalLat * (Math.PI / 180)))) * Math.sin(angleRadians);
    const newLng = originalLng + (deltaLng * (180 / Math.PI));

    const url = `https://www.google.com/maps?q=${newLat},${newLng}`;

    window.location.href = url;
}
