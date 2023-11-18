function calculateWeight() {
    const weight = parseFloat(document.getElementById("weight").value);
    const planet = document.getElementById("planets").value;
    const planet_img=document.getElementById('earth')
    switch(planet){
        case 'Mercury':
            planet_img.src="https://tse2.mm.bing.net/th?id=OIP.sIQhHYzqXiUD4xt5k2fcFgHaF7&pid=Api&P=0&h=180";
            break;
        case 'Venus':
            planet_img.src="https://tse1.mm.bing.net/th?id=OIP.DcLn9ex94CAq5UcB5UfFwQHaHa&pid=Api&P=0&h=180";
            break;
        case 'Earth':
            planet_img.src="https://tse1.mm.bing.net/th?id=OIP.-ZE7_HAAkLLCaBpSnL3mZwHaHx&pid=Api&P=0&h=180";
            break;
        case 'Mars':
            planet_img.src="https://tse4.mm.bing.net/th?id=OIP.m3EA64ySXVUjzGM58ARz7wHaGb&pid=Api&P=0&h=180";
            break;
        case 'Jupiter':
            planet_img.src="https://tse2.mm.bing.net/th?id=OIP.7H7dnRw0jwOblZOzbpO9ggHaFj&pid=Api&P=0&h=180";
            break;
        case 'Saturn':
            planet_img.src="https://tse1.mm.bing.net/th?id=OIP.J7vbSYipnG_bG6iSlE56LwHaEz&pid=Api&P=0&h=180";
            break;
        case 'Uranus':
            planet_img.src="https://tse2.mm.bing.net/th?id=OIP.Ln26HmZ_u-_PByCTbcU1kAHaE7&pid=Api&P=0&h=180";
            break;
        case 'Neptune':
            planet_img.src="https://tse4.mm.bing.net/th?id=OIP.ZeLVpNKFXwnBvBR9VBLFxgHaE8&pid=Api&P=0&h=180";
            break;
    }
    const gravitationalRatios = {
        "Mercury": 0.38,
        "Venus": 0.91,
        "Earth": 1.0,
        "Mars": 0.38,
        "Jupiter": 2.34,
        "Saturn": 0.93,
        "Uranus": 0.92,
        "Neptune": 1.12,
    };
    const weightOnPlanet = weight * gravitationalRatios[planet];
    const resultElement = document.getElementById("res");
    resultElement.innerHTML='abhi';
    resultElement.textContent = `Weight on ${planet}: ${weightOnPlanet.toFixed(2)} N`;
}
