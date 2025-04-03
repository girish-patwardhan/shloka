document.addEventListener("DOMContentLoaded", async () => {
    const container = document.getElementById("shloka-container");
    const popup = document.getElementById("popup");
    const shlokaName = document.getElementById("shloka-name");
    const shlokaInfo = document.getElementById("shloka-info");
    const audioPlayer = document.getElementById("audio-player");
    const closeBtn = document.querySelector(".close");

    // Fetch shloka data
    const response = await fetch("/shlokas");
    const shlokas = await response.json();

    // Create buttons dynamically
    shlokas.forEach(shloka => {
        const button = document.createElement("button");
        button.innerText = shloka.name;
        button.addEventListener("click", () => {
            shlokaName.innerText = shloka.name;
            shlokaInfo.innerText = shloka.info;
            audioPlayer.src = shloka.sound;
            popup.style.display = "block";
        });
        container.appendChild(button);
    });

    // Close popup
    closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
    });

    // Close popup when clicking outside
    window.addEventListener("click", (event) => {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});
