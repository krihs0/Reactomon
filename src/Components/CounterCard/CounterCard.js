import "./CounterCard.css";

const CounterCard = ({counter}) =>{
    return(
        <article className="counterCard">
            <h2 className="counterCard__h2">{counter}</h2>
        </article>
        )
}

export default CounterCard;