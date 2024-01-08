import React from 'react';
import Header from "../../components/UI/header/header";
import {Link} from "react-router-dom";
import FishFoodLogo from "../../img/categoryimg/fish-food.svg";
import Vitamins from "../../img/categoryimg/vitamins.svg";
import AquariumLogo from "../../img/categoryimg/aquarium.svg";
import DecorationLogo from "../../img/categoryimg/decoration.svg";
import AquariumChemistryLogo from "../../img/categoryimg/aquariumChemistry.svg";
import Footer from "../../components/UI/footer/Footer";
import TextBanner from "../../components/UI/text banner/TextBanner";
import "../../styles/App.css"
const FishPage = () => {
    return (
        <div className="App">
            <Header></Header>
            <TextBanner text="Категории товаров для рыб"/>
            <div className={"App__category"}>
                <Link to="/for-fish/feeds" style={{marginLeft: 120}}>
                    <button className="App__btn">
                        <img src={FishFoodLogo} style={{width: 120}}/>
                        <p>Корм</p>
                    </button>
                </Link>
                <Link to="/for-fish/vitamins">
                    <button className="App__btn">
                        <img src={Vitamins} style={{width: 85}}/>
                        <p>Витамины</p>
                    </button>
                </Link>
                <Link to="/for-fish/aquariums">
                    <button className="App__btn">
                        <img src={AquariumLogo} style={{width: 120}}/>
                        <p>Аквариумы</p>
                    </button>
                </Link>

                <Link to="/for-fish/decorations">
                    <button className="App__btn">
                        <img src={DecorationLogo} style={{width: 120}}/>
                        <p>Декорации</p>
                    </button>
                </Link>

                <Link to="/for-fish/aquariumchemistry">
                    <button className="App__btn">
                        <img src={AquariumChemistryLogo} style={{width: 115}}/>
                        <p style={{fontSize:15}}>Аквариумная химия</p>
                    </button>
                </Link>

            </div>

            <Footer></Footer>
        </div>
    );
};

export default FishPage;