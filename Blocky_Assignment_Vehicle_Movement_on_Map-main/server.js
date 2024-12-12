const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Dummy data simulating the vehicle's movement
const vehicleData = [
    { "latitude": 17.385044, "longitude": 78.486671, "timestamp": "2024-07-20T10:00:00Z" },
    { "latitude": 17.385045, "longitude": 78.486672, "timestamp": "2024-07-20T10:00:05Z" },
    // Add more data points here...
];

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/vehicle-location', (req, res) => {
    res.json(vehicleData);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});