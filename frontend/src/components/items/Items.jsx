import React, {useEffect, useState} from 'react';
import Goods from './goods.json'
import Item from "./Item";
import axios from "axios";
const Items = (props) => {
    const [items, setItems] = useState([])

    async function fetchItems(){
        let params = [{
            Sort: "date", Column: "category", Meaning:"собаки"
        }]
        let jsonparams = JSON.stringify(params)

        const response = await axios.post("http://localhost:8080/allAndSort",{Sort: "date"}, {headers:{"Content-Type": "application/json"}})
        console.log(response.data)
    }
    return (
        <div>
            <button onClick={fetchItems}>Get data</button>
        </div>
    );
};

export default Items;