import { useState, useEffect } from "react"
import CocktailsList from "../components/CocktailsList"
import CocktailDetail from "../components/CocktailDetail"
import MenuBar from "../components/MenuBar"

const CocktailsContainer = () => {

    const [cocktails, setCocktails] = useState([])
    const [searchTerm, setSearchTerm] = useState(null)
    const [selectedCocktail, setSelectedCocktail] = useState(null)
    const [error, setError] = useState(null)

    const getCocktails = function () {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${(searchTerm)}
        `)
            .then(res => res.json())
            .then(cocktails => cocktails.drinks ? setCocktails(cocktails.drinks)
                : setError('No results found'))
            .catch(err => console.error(`Loading error: ${err}`))
    }

    useEffect(() => {
        if (searchTerm) {
            getCocktails()
        }
    }, [searchTerm])

    const onSubmitSearch = (searchTerm) => {
        setSearchTerm(searchTerm)
        setError(null)
        // console.log(searchTerm)
    }
    
    const onCocktailClicked = function (cocktail) {
        setSelectedCocktail(cocktail)
    }

    return (
        <div>
            <div>
                <MenuBar onSubmitSearch={onSubmitSearch} />
            </div>
            <div className="main-container">
                {error ?
                    <>
                        <h2>Cocktails:</h2>
                        <ul>
                            <li>{error}</li>
                        </ul>
                    </>
                    :
                    <>
                        <h2>Cocktails:</h2>
                        <CocktailsList cocktails={cocktails} onCocktailClicked={onCocktailClicked}/>
                        {selectedCocktail && <CocktailDetail cocktail={selectedCocktail}/>}
                    </>
                }
            </div>

        </div>
    )

}

export default CocktailsContainer