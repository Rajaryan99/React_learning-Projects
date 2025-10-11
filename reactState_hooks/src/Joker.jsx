import { useEffect, useState } from "react";

export default function Joker(){
    let [joke, setjoke] = useState({});
    
    const URL = 'https://official-joke-api.appspot.com/random_joke'

    const getJoke =  async ()  => {
       let res =  await fetch(URL);
       let jsonRes = await res.json();
       console.log(jsonRes);
       setjoke({ setup: jsonRes.setup, punchline: jsonRes.punchline});
    }

    useEffect(() => {
        async function getFirstJoke() {
            let res =  await fetch(URL);
            let jsonRes = await res.json();
            console.log(jsonRes);
            setjoke({ setup: jsonRes.setup, punchline: jsonRes.punchline});
        }
        getFirstJoke();
}, []);

    return (
        <div>
            <h1>Joker!</h1>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>

            <br />
            <button onClick={getJoke}>Get New Joke</button>
        </div>
    )
}