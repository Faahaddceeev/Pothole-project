const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Store pothole data
let potholes = [];

app.post('/api/pothole', (req, res) => {
  const { lat, lon } = req.body;
  potholes.push({ latitude: lat, longitude: lon });
  console.log(`Pothole detected at: ${lat}, ${lon}`);
  res.sendStatus(200);
});

app.get('/api/potholes', (req, res) => {
  res.json(potholes);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});