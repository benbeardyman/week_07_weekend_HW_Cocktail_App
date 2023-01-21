import "./CocktailDetail.css"

const CocktailDetail = ({ cocktail }) => {

    const ingredients = []
    for (let i = 1; i <= 15; i++) {
        if (cocktail[`strIngredient${i}`] && cocktail[`strMeasure${i}`]) {
            ingredients.push(`${cocktail[`strIngredient${i}`]} ${cocktail[`strMeasure${i}`]}`)
        }
    }
    
    return (
        <div className="cocktail-detail">
            <h2>{cocktail.strDrink}</h2>
            <img className="thumb" src={cocktail.strDrinkThumb}/>
            <ul>
                {ingredients.map((ingredient, i) => (
                    <li className="ing-li" key={i}>{ingredient}</li>
                ))}
            </ul>
            <p> {cocktail.strInstructions} </p>
        </div>
    )
}

export default CocktailDetail