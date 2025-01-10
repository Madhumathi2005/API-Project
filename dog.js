document.getElementById('getDog').addEventListener('click', function() {
    // Fetch a random dog image from the Dog CEO API
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json()) // Convert response to JSON
        .then(data => {
            // Display the image
            const dogImage = document.getElementById('dogImage');
            dogImage.style.display = 'block'; // Show the image
            dogImage.src = data.message; // Update the image src
        })
        .catch(error => console.error('Error fetching dog image:', error));
});
