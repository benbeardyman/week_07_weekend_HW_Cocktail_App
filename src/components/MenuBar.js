import "./MenuBar.css"

const MenuBar = ({onSubmitSearch}) => {

    return (
        <div className="menu-bar">
            <form onSubmit={ evt => {
                evt.preventDefault()
                const searchTerm = evt.target.search.value
                onSubmitSearch(searchTerm)
            }}>
                <input id="search" type="text" />
                <input type="submit" value="Search" className="search-button" />
            </form>
        </div>
    )

}

export default MenuBar