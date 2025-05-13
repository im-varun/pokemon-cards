import './RandomPokemon.css'

function RandomPokemon() {
    const randomNumber = Math.floor(Math.random() * 151) + 1;
    const pokemonImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomNumber}.png`

    return (
        <div className='random-pokemon'>
            <h1>Pokemon #{randomNumber}</h1>
            <img src={pokemonImageUrl} alt='Pokemon Image' />
        </div>
    );
}

export default RandomPokemon
