import "./CocktailList.css"
import Cocktail from "./Cocktail"


const CocktailsList = ({ cocktails, onCocktailClicked}) => {

    const arrayOfCocktails = cocktails.map((cocktail) => {
        return <Cocktail cocktail={cocktail} name={cocktail.strDrink} key={cocktail.idDrink} onCocktailClicked={onCocktailClicked} />
    })

    return (
        <div>
            <ul>
                {arrayOfCocktails}
            </ul>
        </div>
    )

}

export default CocktailsList