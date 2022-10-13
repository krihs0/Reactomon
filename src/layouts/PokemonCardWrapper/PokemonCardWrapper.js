import PokemonCard from "../../Components/PokemonCard/PokemonCard"
import "./PokemonCardWrapper.css"

const PokemonCardWrapper = (props) =>{
    return(
        <section className="pokemonCardWrapper">
        <PokemonCard
            pokemonName="Garchomp"
            pokemonType={["dragon", "ground"]}
            pokemonImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png"
            pokemonHP="108"
            updateCounter={props.updateCounter}
        /> 
        <PokemonCard
            pokemonName="Bidoof"
            pokemonType={["normal"]}
            pokemonImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/399.png"
            pokemonHP="59"
            updateCounter={props.updateCounter}
        />
        <PokemonCard
            pokemonName="Unown"
            pokemonType={["psychic"]}
            pokemonImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png"
            pokemonHP="48"
            updateCounter={props.updateCounter}
        />
        <PokemonCard
            pokemonName="Stoutland"
            pokemonType={["normal"]}
            pokemonImage="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/508.png"
            pokemonHP="85"
            updateCounter={props.updateCounter}
        />
        </section>
    )
}

export default PokemonCardWrapper;