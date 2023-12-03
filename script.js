    const btnEl = document.getElementById("btn");
    const jokeEl = document.getElementById("joke")

    const apiKey = "w8pkNiecCqasDaKY4RST9g==7DLmouK5EchFcutm";

    const options = {
        method: "GET",
        headers: {
            "X-Api-Key": apiKey,
        },
    };

    const  apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

    async function getJoke() {
        try {
            jokeEl.innerText = "updating...";
            btnEl.disabled = true;
            btnEl.innerText = "loading...";
        const response = await fetch(apiURL, options);
        const data = await response.json();
    
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";
    
        
    
        jokeEl.innerText = data[0].joke;
        } catch (error) {
            jokeEl.innerText = "An error happened, try again later"
            console.log(Error);
        }
        jokeEl.innerText = "updating...";
        btnEl.disabled = true;
        btnEl.innerText = "loading...";  
    const response = await fetch(apiURL, options);
    const data = await response.json();
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";
    

    

    jokeEl.innerText = data[0].joke;
    }

    btnEl.addEventListener('click', getJoke);

