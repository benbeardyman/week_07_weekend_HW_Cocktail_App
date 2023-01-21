import Cocktail from "./Cocktail"

const CocktailsList = ({ cocktails }) => {

    const arrayOfCocktails = cocktails.map((cocktail) => {
        return <Cocktail cocktail={cocktail} name={cocktail.strDrink} key={cocktail.idDrink} />
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