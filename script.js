// Check if Web SQL is supported
if (window.openDatabase) {
    const db = openDatabase("TechExperiencesDB", "1.0", "Database for storing tech experiences", 2 * 1024 * 1024);

    // Create experiences table if it doesn't exist
    db.transaction((tx) => {
        tx.executeSql("CREATE TABLE IF NOT EXISTS experiences (id INTEGER PRIMARY KEY, title TEXT, description TEXT, link TEXT)");
    });

    // Function to add experience to the database
    function addExperience(title, description, link) {
        db.transaction((tx) => {
            tx.executeSql("INSERT INTO experiences (title, description, link) VALUES (?, ?, ?)", [title, description, link]);
        }, null, displayExperiences);
    }

    // Function to display experiences from the database
    function displayExperiences() {
        const experienceList = document.getElementById("experience-list");
        experienceList.innerHTML = ""; // Clear current list

        db.transaction((tx) => {
            tx.executeSql("SELECT * FROM experiences", [], (tx, results) => {
                const len = results.rows.length;
                for (let i = 0; i < len; i++) {
                    const experience = results.rows.item(i);
                    const card = document.createElement("div");
                    card.className = "experience-card";
                    card.innerHTML = `
                        <h3>${experience.title}</h3>
                        <p>${experience.description}</p>
                        <a href="${experience.link}" target="_blank">Learn More</a>
                    `;
                    experienceList.appendChild(card);
                }
            });
        });
    }

    // Event listener for the form submission
    document.getElementById("experience-form").addEventListener("submit", function (e) {
        e.preventDefault();

        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const link = document.getElementById("link").value;

        addExperience(title, description, link);

        // Clear the form after submission
        document.getElementById("title").value = "";
        document.getElementById("description").value = "";
        document.getElementById("link").value = "";
    });

    // Display experiences on page load
    window.onload = displayExperiences;
} else {
    alert("Web SQL is not supported in this browser. Try a different browser or use IndexedDB.");
}
