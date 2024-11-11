// Sample data for tech experiences
const experiences = [
    {
        name: "Sanath",
        description: `
            I started my journey into tech by learning Python from FreeCodeCamp. At first, it was difficult, but through constant practice and solving challenges, I gained a solid understanding of the language. I built a few small projects like a calculator and a simple to-do list application, which gave me the confidence to move forward.

            After becoming comfortable with Python, I shifted to learning SQL with the help of ChatGPT. I was able to get quick explanations and practical examples that helped me understand how databases work. I created a few basic databases and worked on querying them, which expanded my technical knowledge.

            Finally, I took part in a local hackathon, which introduced me to web development. I learned HTML, CSS, and JavaScript, and even had the chance to pitch my ideas. Through these experiences, I suggest to juniors that they focus on learning the basics, build projects, and don’t hesitate to participate in competitions and hackathons. It’s an excellent way to challenge yourself and grow.
        `,
        tag: "technical",
        likes: 0
    },
    {
        name: "Kiran",
        description: `
            My technical journey began with FreeCodeCamp where I started learning Python. Initially, I struggled with basic concepts like loops and functions, but I persevered and slowly started solving problems on the platform. After mastering Python, I realized that learning SQL was the next big step for me, so I used ChatGPT to practice SQL queries and understand how databases operate.

            During my learning process, I joined a few hackathons that focused on building web applications. That's where I first encountered HTML and CSS, and I immediately fell in love with the process of designing and developing websites. Through continuous learning, I built my first portfolio website and even had the chance to pitch my project in a hackathon.

            My advice for juniors is to not get discouraged by the initial hurdles. Start with Python, then move on to SQL, and finally dive into web development. Participating in hackathons and tech competitions will give you real-world experience, help you build your portfolio, and teach you how to solve problems under pressure.
        `,
        tag: "technical",
        likes: 0
    },
    {
        name: "Jayanth",
        description: `
            I started my technical journey with FreeCodeCamp’s Python course. I found it a bit overwhelming at first, but with consistent effort, I got a good grasp of the fundamentals of programming. Once I was comfortable with Python, I turned to SQL through ChatGPT, where I learned how to interact with databases and write complex queries.

            As I continued my journey, I began exploring web development. I participated in a few hackathons, where I learned how to build websites using HTML, CSS, and JavaScript. It was during these hackathons that I gained my first experience with full-stack development and pitching my projects to others. The real-time feedback I received was invaluable.

            My suggestion to juniors is to take it step by step. Learn Python first, then move on to SQL and web development. Hackathons and competitions are a great way to meet people, learn new skills, and get motivated. Don't be afraid to fail, as it’s part of the learning process.
        `,
        tag: "technical",
        likes: 0
    },
    {
        name: "Tharun",
        description: `
            I began my technical journey by learning Python through FreeCodeCamp. I started with basic programming concepts and slowly moved towards more advanced topics. Once I had a grasp of Python, I decided to learn SQL with the help of ChatGPT, which gave me personalized answers and solutions to practice queries.

            During my journey, I participated in a web development hackathon where I learned how to design and develop websites using HTML, CSS, and JavaScript. I also got a chance to work on a project with a team, which helped me improve my collaboration skills. This experience inspired me to continue learning and improving my technical skills.

            To all the juniors, my advice is to start with Python, then dive into databases like SQL, and later explore web development. Always challenge yourself with hackathons and competitions. These are fantastic opportunities to learn from others and showcase your skills.
        `,
        tag: "technical",
        likes: 0
    },
    {
        name: "Nagendra",
        description: `
            My journey into tech started with FreeCodeCamp, where I learned Python. The interactive challenges helped me get a solid understanding of basic programming concepts. Once I felt confident with Python, I moved on to SQL with ChatGPT, where I learned how to interact with databases and write complex queries.

            I then joined a few web development hackathons, which is where I first built websites using HTML, CSS, and JavaScript. It was an exciting experience as I pitched my project and received feedback from experienced developers. This encouraged me to continue improving my web development skills and even try building a few full-stack applications.

            My advice for juniors is to not rush and focus on one thing at a time. Start with Python, then move to SQL, and then explore web development. Always participate in hackathons and challenges as they are great for learning and growing your skill set.
        `,
        tag: "technical",
        likes: 0
    }
];

// Function to create an experience card
function createExperienceCard(experience) {
    const card = document.createElement("div");
    card.className = "experience-card";
    card.innerHTML = `
        <h3>${experience.name}</h3>
        <p>${experience.description}</p>
        <p class="experience-tag">Tag: ${experience.tag}</p>
        <button class="like-button" onclick="increaseLikes(event)">Like</button>
        <p class="like-count">Likes: <span class="like-count-number">${experience.likes}</span></p>
    `;
    return card;
}

// Function to display experiences
function displayExperiences(experienceData) {
    const experiencesContainer = document.getElementById("experiences");
    experiencesContainer.innerHTML = ''; // Clear previous content
    experienceData.forEach(experience => {
        const card = createExperienceCard(experience);
        experiencesContainer.appendChild(card);
    });
}

// Function to filter experiences based on tag
document.getElementById("experience-filter").addEventListener("change", (e) => {
    const filterValue = e.target.value;
    if (filterValue === "all") {
        displayExperiences(experiences);
    } else {
        const filteredExperiences = experiences.filter(exp => exp.tag === filterValue);
        displayExperiences(filteredExperiences);
    }
});

// Function to increase likes count
function increaseLikes(event) {
    const likeCountElement = event.target.nextElementSibling.querySelector(".like-count-number");
    let likeCount = parseInt(likeCountElement.textContent);
    likeCount++;
    likeCountElement.textContent = likeCount;

    // Find the experience and update the likes in the data
    const experienceName = event.target.previousElementSibling.previousElementSibling.textContent;
    const experience = experiences.find(exp => exp.name === experienceName);
    if (experience) {
        experience.likes = likeCount;
    }
}

// Display all experiences on initial load
displayExperiences(experiences);
