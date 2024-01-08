import React from 'react';
import Dropdown from './Dropdown';
import { useState, useEffect, useRef } from "react";
import "./Category.css"
const CategoryItems = ({ items,  depthLevel}) => {
    const [dropdown, setDropdown] = useState(false);

    let ref = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (dropdown && ref.current && !ref.current.contains(event.target)) {
                setDropdown(false);
            }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [dropdown]);


    return (
        <li className="category-items" ref={ref}>
            {items.submenu ? (
                <>
                    <button type="button" aria-haspopup="menu"
                            aria-expanded={dropdown ? "true" : "false"}
                            onClick={() => setDropdown((prev) => !prev)}>
                        {items.title}{' '}
                        {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
                    </button>
                    <Dropdown submenus={items.submenu} dropdown={dropdown} depthLevel={depthLevel} />
                </>
            ) : (
                <a href={items.url}>{items.title}</a>
            )}
        </li>
    );

};

export default CategoryItems;