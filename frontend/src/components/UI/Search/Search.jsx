import React from 'react';
import classes from './Search.module.css'
import Mybutton from "../button/Mybutton";
const Search = () => {
    return (
        <form className={classes.Form}>
            <input className={classes.Input}
                placeholder="Поиск..."
            />
            <Mybutton style={{width:100, height:50}}>Найти</Mybutton>
        </form>
    );
};

export default Search;