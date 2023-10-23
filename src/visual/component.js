export async function getData() {
        const response = await fetch("https://v2.jokeapi.dev/joke/Any");
        const data = await response.json();
        console.log(data)
        console.log(response)
  
        /*
        if (data.setup && data.delivery) {
          setJoke(data.setup + " ... " + data.delivery);
        } else {
          setJoke(data.joke || "Oops! Couldn't fetch a joke this time.");
        }*/
    
}