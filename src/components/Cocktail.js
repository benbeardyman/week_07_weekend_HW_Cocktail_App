import "./Cocktail.css"

const Cocktail = ({ cocktail, name, onCocktailClicked}) => {

    const handleClick = function () {
        onCocktailClicked(cocktail)
        console.log (`this ${name}`)
    }

    return (
        <div>
            <li className="search-li" onClick={handleClick}>
                {name}
            </li>
        </div>
    )
}

export default Cocktail