document.getElementById('getUser').addEventListener('click', async () => {
    const response = await fetch('https://randomuser.me/api/');
    const data = await response.json();
    const user = data.results[0];
    document.getElementById('user').innerHTML = `
        <p>Name: ${user.name.first} ${user.name.last}</p>
        <p>Email: ${user.email}</p>
        <img src="${user.picture.large}" alt="User Picture">
    `;
});
