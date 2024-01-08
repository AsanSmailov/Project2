import React from 'react';

const Item = (props) => {
    return (
        <div>
            <p> Имя: {props.item.name}</p>
            <p> Цена: {props.item.price}</p>
            <p> Категория: {props.item.category}</p>
        </div>
    );
};

export default Item;