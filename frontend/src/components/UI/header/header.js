import React, {useState} from 'react';
import Mybutton from "../button/Mybutton";
import Search from "../Search/Search";
import "./headerStyle.css"
import Logo from "../../../img/logo.svg"
import CartLogo from "../../../img/cart.svg"
import UserLogo from "../../../img/user.svg"
import BoxLogo from "../../../img/box.svg"
import Categorybtn from "../category/categorybtn";
import Modal from "../modal/modal"
import ItemsForm from "../../items/ItemsForm";
const Header = () => {
    const [modalActive, setModalActive] = useState(false)

    return (
        <div className="Header">
            <a href="/" className="Header__logo">
                <img src={Logo} style={{height:96}}/>
                <h1 style={{padding: 25}}>ZooMarket</h1>
            </a>

            <div className="Header__category">
                <Categorybtn></Categorybtn>
            </div>

                <div className="Header__search">
                    <Search/>
                </div>

            <div className="Header__btn">
                <Mybutton style={{marginRight: 10}} onClick={() => setModalActive(true)}>
                    <p style={{fontSize:14}}>Добавить товар</p>
                </Mybutton>
                <Mybutton style={{marginRight: 10}}>
                    <img src={BoxLogo} style={{width:50, height: 50}}/>
                    <p>Заказы</p>
                </Mybutton>
                <Mybutton style={{marginRight: 10}}>
                    <img src={UserLogo} style={{width:50, height: 50}}/>
                    <p>Войти</p>
                </Mybutton>
                <Mybutton>
                    <img src={CartLogo} style={{width:50, height: 50}}/>
                    <p>Корзина</p>
                </Mybutton>
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <ItemsForm/>
            </Modal>
        </div>
    );
};

export default Header;