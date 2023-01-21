import { useState, useEffect } from "react"
import CocktailsList from "../components/CocktailsList"
import MenuBar from "../components/MenuBar"

const CocktailsContainer = () => {

    const [cocktails, setCocktails] = useState([])
    const [searchTerm, setSearchTerm] = useState(null)

    const getCocktails = function () {
        // fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=martini
        // `)
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${encodeURIComponent(searchTerm)}
        `)
            .then(res => res.json())
            .then(cocktails => setCocktails(cocktails.drinks))
            .catch(err => console.error(`Loading error: ${err}`))
    }

    useEffect(() => {
        if (searchTerm) {
            getCocktails()
        }
    }, [searchTerm])

    const onSubmitSearch = (searchTerm) => {
        setSearchTerm(searchTerm)
        // console.log(searchTerm)
    }

    return (
        <>
            <div>
                <MenuBar onSubmitSearch={onSubmitSearch} />
            </div>
            <div className="main-container">
                <h2>Cocktails:</h2>
                <CocktailsList cocktails={cocktails} />
            </div>
            
        </>
    )

}

export default CocktailsContainer