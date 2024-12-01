

document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("toggle-mode");
    const bgVideo = document.getElementById("bg-video");
    const videoSource = bgVideo.querySelector("source");
    const body = document.body;
    const teamPhotos = document.querySelectorAll(".team-member img");
    let isNight;

    // Function to set the background, mode, and profile photos based on time
    const setBackgroundByTime = () => {
        const currentHour = new Date().getHours();
        if (currentHour >= 7 && currentHour < 18) {
            videoSource.setAttribute("src", "media/bg1.mp4");
            toggleButton.textContent = "☾";
            body.classList.remove("night-mode");
            isNight = false;
        } else {
            videoSource.setAttribute("src", "media/bg.mp4");
            toggleButton.textContent = "☼";
            body.classList.add("night-mode");
            isNight = true;
        }
        bgVideo.load(); 
    };

    // Function to update profile photos based on mode
    const updateProfilePhotos = (src) => {
        teamPhotos.forEach(photo => {
            photo.setAttribute("src", src);
        });
    };

    setBackgroundByTime();

    // Button event 
    toggleButton.addEventListener("click", () => {
        if (isNight) {
            videoSource.setAttribute("src", "media/bg1.mp4");
            toggleButton.textContent = "☾";
            body.classList.remove("night-mode");
        } else {
            videoSource.setAttribute("src", "media/bg.mp4");
            toggleButton.textContent = "☼";
            body.classList.add("night-mode");
        }
        bgVideo.load();
        isNight = !isNight;
    });
});
// Night Mode Toggle Function
function toggleNightMode() {
    const body = document.body;
    const toggleButton = document.getElementById('nightModeToggle');
    const profilePics = document.querySelectorAll('.profile-pic, .faculty-list img');

    body.classList.toggle('night-mode');

    if (body.classList.contains('night-mode')) {
        toggleButton.textContent = "☽"; // Night Mode Icon
    } else {
        toggleButton.textContent = "☼"; // Day Mode Icon
    }
}

// Automatically set night mode based on time
window.onload = function () {
    const currentHour = new Date().getHours();
    const body = document.body;
    const toggleButton = document.getElementById('nightModeToggle');
    const profilePics = document.querySelectorAll('.profile-pic, .faculty-list img');

    if (currentHour >= 18 || currentHour < 7) {
        body.classList.add('night-mode');
        toggleButton.textContent = "☽";
    } else {
        body.classList.remove('night-mode');
        toggleButton.textContent = "☼";
    }
};

// Function to dynamically update profile images
function updateProfilePics(src) {
    const profilePics = document.querySelectorAll('.profile-pic, .faculty-list img');
    profilePics.forEach(img => img.setAttribute('src', src));
}


document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('art-canvas');
    const ctx = canvas.getContext('2d');

    // Canvas dimensions
    const width = canvas.width;
    const height = canvas.height;

    // properties
    const cols = 10; 
    const rows = 10; 
    const circleRadius = 15; 
    const gap = 40; 
    const waveSpeed = 0.05; 
    let time = 0;

    
    const startX = (width - (cols - 1) * gap) / 2;
    const startY = (height - (rows - 1) * gap) / 2;

    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, width, height); // Clear the canvas

        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                
                const x = startX + col * gap;
                const y = startY + row * gap;

                // wave effect 
                const radiusOffset = Math.sin(time + (col + row) * 0.5) * 8;

                // Draw the circle
                ctx.beginPath();
                ctx.arc(x, y, circleRadius + radiusOffset, 0, Math.PI * 2);
                ctx.fillStyle = `hsl(${(time * 50 + col * 30) % 360}, 70%, 60%)`; // Dynamic color
                ctx.fill();
            }
        }

        // Increment time for the next frame
        time += waveSpeed;

        // Loop the animation
        requestAnimationFrame(animate);
    }

    // Start the animation
    animate();
});
