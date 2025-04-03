const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Shloka Data
const shlokas = [
    { id: 1, name: "Gayatri Mantra", sound: "/shlokas/gayatri.mp3", info: "Gayatri Mantra is a universal prayer from the Rigveda." },
    { id: 2, name: "Maha Mrityunjaya", sound: "/shlokas/maha_mrityunjaya.mp3", info: "A powerful mantra for health and well-being." },
    { id: 3, name: "Hanuman Chalisa", sound: "/shlokas/hanuman_chalisa.mp3", info: "40 verses praising Lord Hanuman." },
    // Add more shlokas
];

// API endpoint to get shloka data
app.get("/shlokas", (req, res) => {
    res.json(shlokas);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
