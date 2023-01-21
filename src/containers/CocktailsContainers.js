import { useState, useEffect } from "react"
import CocktailsList from "../components/CocktailsList"

const CocktailsContainer = () => {

    const [cocktails, setCocktails] = useState([])

    const getCocktails = function () {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=negroni
        `)
            .then(res => res.json())
            .then(cocktails => setCocktails(cocktails.drinks))
            .catch(err => console.error(`Loading error: ${err}`))
    }

    useEffect(() => {
        getCocktails()
    }, [])

    const cocktailItems = cocktails.map(cocktail => {
        return <li key={cocktail.idDrink}>{cocktail.strDrink}</li>
    })

    console.log(cocktailItems)

    return (
        <div className="main-container">
            <h2>Cocktails:</h2>
            <CocktailsList cocktails={cocktails} />
        </div>
    )

}

export default CocktailsContainer