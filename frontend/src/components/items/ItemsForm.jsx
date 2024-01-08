import React, {useState} from 'react';
import MyInput from "../UI/input/MyInput";
import Mybutton from "../UI/button/Mybutton";
import axios from "axios";
import Modal from "../UI/modal/modal";
import "./ItemsForm.css"

const ItemsForm = () => {
    let categoryList = [
        {
            "Собаки": ["Корма", "Лакомства", "Витамины", "Аксессуары", "Переноски"]
        },
        {
            "Кошки": ["Корма", "Лакомства", "Витамины", "Аксессуары", "Переноски"]
        },
        {
            "Рыбы": ["Корма", "Витамины", "Аквариумы", "Декорации", "Аквариумная химия"]
        },
        {
            "Птицы": ["Корма", "Лакомства", "Витамины", "Аксессуары", "Клетки"]
        },
        {
            "Грызуны": ["Корма", "Лакомства", "Витамины", "Аксессуары", "Клетки"]
        },
        {
            "Рептилии": ["Корма", "Витамины", "Декорации", "Террариумы"]
        }
    ]
    const [active, setActive] = useState(false)
    const [message, setMessage] = useState()
    const [activeCategory, setCategory] = useState([])
    const handleCategoryChange = (e) => {
        const selectedCategory = e.target.value;
        const foundCategory = categoryList.find((category) =>
            Object.keys(category)[0] === selectedCategory
        );

        if (foundCategory) {
            setCategory(foundCategory[selectedCategory]);
        } else {
            setCategory([]);
        }
    };
     async function UploadItem(e){
         e.preventDefault()
        let selcategory = document.getElementById("category")
        let selsubcategory = document.getElementById("subcategory")
        let Newitem={
            status: "admin",
            name: document.getElementById('name').value,
            price: Number(document.getElementById('price').value),
            decription: document.getElementById('description').value,
            photo: document.getElementById('photo').value,
            category: selcategory.options[selcategory.selectedIndex].value,
            subcategory: selsubcategory.options[selsubcategory.selectedIndex].value,
            brand: document.getElementById('brand').value
        }

         const response = await axios.post("http://localhost:8080/register", {...Newitem}, {headers: {"Content-Type": "application/json"}})
         setMessage(response.data)
         setActive(true)
    }

    return (
        <form className={"Form"}>
            <MyInput
                name="name"
                id="name"
                type="text"
                placeholder="Название товара"
            />
            <MyInput
                name='price'
                id="price"
                type="number"
                placeholder="Цена"
            />
            <MyInput
                name='description'
                id="description"
                type="text"
                placeholder="Описание"
            />
            <MyInput
                name='brand'
                id="brand"
                type="text"
                placeholder="Бренд"
            />
            <MyInput
                name='photo'
                id="photo"
                type="text"
                placeholder="Фото(url)"
            />
            <select name='category' id="category" onChange={handleCategoryChange}>
                <option value="" className={"Form__option"}>Выберите категорию</option>
                {categoryList.map((category, index) => {
                    const categoryName = Object.keys(category)[0];
                    return <option key={index} value={categoryName} className={"Form__option"}>{categoryName}</option>;
                })}
            </select>

            <select name='subcategory' id="subcategory">
                <option value="" className={"Form__option"}>Выберите подкатегорию</option>
                {activeCategory.map((subcategory, index) => (
                    <option key={index} value={subcategory} className={"Form__option"}>{subcategory}</option>
                ))}
            </select>

            <button type={"reset"}>Очистить</button>
            <button onClick={UploadItem}>Создать товар</button>

            <Modal active={active} setActive={setActive} style={{width:150}}>{message}</Modal>
        </form>

    );
};

export default ItemsForm;