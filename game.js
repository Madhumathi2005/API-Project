document.getElementById("truthBtn").addEventListener("click", async () => {
    const response = await fetch("https://api.truthordarebot.xyz/v1/truth");
    const data = await response.json();
    document.getElementById("output").innerHTML = `<p>Truth: ${data.question}</p>`;
});

document.getElementById("dareBtn").addEventListener("click", async () => {
    const response = await fetch("https://api.truthordarebot.xyz/v1/dare");
    const data = await response.json();
    document.getElementById("output").innerHTML = `<p>Dare: ${data.question}</p>`;
});
