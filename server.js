const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Bird Data
const birds = [
    { id: 1, name: "Robin", sound: "/sounds/robin.mp3", info: "Robins are small, red-breasted birds." },
    { id: 2, name: "Sparrow", sound: "/sounds/sparrow.mp3", info: "Sparrows are small, brown birds found worldwide." },
    { id: 3, name: "Blue Jay", sound: "/sounds/bluejay.mp3", info: "Blue Jays are known for their striking blue feathers." },
    // Add 9 more birds
];

// API endpoint to get bird data
app.get("/birds", (req, res) => {
    res.json(birds);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
