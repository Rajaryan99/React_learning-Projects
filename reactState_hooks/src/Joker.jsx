export default function Joker(){
    
    const URL = 'https://official-joke-api.appspot.com/random_joke'

    const getJoke =  async ()  => {
       let res =  await fetch(URL);
       let jsonRes = await res.json();
       console.log(jsonRes)
    }
    return (
        <div>
            <h2>Joker!</h2>
            <br />
            <button onClick={getJoke}>Get New Joke</button>
        </div>
    )
}