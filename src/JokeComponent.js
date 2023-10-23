import React, { useState, useEffect } from 'react';

function JokeComponent() {
  const [joke, setJoke] = useState("Click here for a joke");

  async function fetchJoke() {
    try {
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
    } catch (error) {
      setJoke("Error fetching joke. Please try again.");
    }
  }

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <h1
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        cursor: 'pointer'
      }}
      onClick={fetchJoke}
    >
      {joke}
    </h1>
  );
}

export default JokeComponent;
