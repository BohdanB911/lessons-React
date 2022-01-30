import React from "react";
import '../Search-panel/search-panel.css'

const SearchPanel = (props) => {
    return (
        <form onSubmit={ props.handler }>
            <input type="text" name="task" placeholder = "enter yor task"/>
            <input type="submit" value='Go' placeholder = "Go"/>
        </form>
     

    )
};

export default SearchPanel;