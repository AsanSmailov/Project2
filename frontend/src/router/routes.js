import App from "../App";
import DogPage from "../pages/dog/DogPage";
import DogFeedsPage from "../pages/dog/SubCategory/DogFeedsPage";
import DogThreatsPage from "../pages/dog/SubCategory/DogThreatsPage";
import DogVitaminsPage from "../pages/dog/SubCategory/DogVitaminsPage";
import DogCarriesPage from "../pages/dog/SubCategory/DogCarriesPage";
import CatPage from "../pages/cat/CatPage";
import CatFeedsPage from "../pages/cat/Subcategory/CatFeedsPage";
import CatThreatsPage from "../pages/cat/Subcategory/CatThreatsPage";
import CatVitaminsPage from "../pages/cat/Subcategory/CatVitaminsPage";
import CatAccessoriesPage from "../pages/cat/Subcategory/CatAccessoriesPage";
import CatCarriesPage from "../pages/cat/Subcategory/CatCarriesPage";
import FishPage from "../pages/fish/FishPage";
import FishFeedsPage from "../pages/fish/Subcategory/FishFeedsPage";
import FishVitaminsPage from "../pages/fish/Subcategory/FishVitaminsPage";
import FishAquariumsPage from "../pages/fish/Subcategory/FishAquariumsPage";
import FishDecorationsPage from "../pages/fish/Subcategory/FishDecorationsPage";
import FishAquariumChemistryPage from "../pages/fish/Subcategory/FishAquariumChemistryPage";
import BirdPage from "../pages/bird/BirdPage";
import BirdFeedsPage from "../pages/bird/Subcategory/BirdFeedsPage";
import BirdVitaminsPage from "../pages/bird/Subcategory/BirdVitaminsPage";
import BirdAccessoriesPage from "../pages/bird/Subcategory/BirdAccessoriesPage";
import BirdCagesPage from "../pages/bird/Subcategory/BirdCagesPage";
import RodentPage from "../pages/rodent/RodentPage";
import RodentFeedsPage from "../pages/rodent/Subcategory/RodentFeedsPage";
import BirdThreatsPage from "../pages/bird/Subcategory/BirdThreatsPage";
import RodentThreatsPage from "../pages/rodent/Subcategory/RodentThreatsPage";
import RodentVitaminsPage from "../pages/rodent/Subcategory/RodentVitaminsPage";
import RodentAccessoriesPage from "../pages/rodent/Subcategory/RodentAccessoriesPage";
import RodentCagesPage from "../pages/rodent/Subcategory/RodentCagesPage";
import ReptilePage from "../pages/reptile/ReptilePage";
import ReptileFeedsPage from "../pages/reptile/Subcategory/ReptileFeedsPage";
import ReptileVitaminsPage from "../pages/reptile/Subcategory/ReptileVitaminsPage";
import ReptileDecorationsPage from "../pages/reptile/Subcategory/ReptileDecorationsPage";
import ReptileTerrariumsPage from "../pages/reptile/Subcategory/ReptileTerrariumsPage";
import MainPage from "../pages/MainPage";
import ErrorPage from "../pages/ErrorPage";
import CesarPage from "../pages/brands/CesarPage";
import DreamiesPage from "../pages/brands/DreamiesPage";
import EightinOnePage from "../pages/brands/EightinOnePage";
import KitekatPage from "../pages/brands/KitekatPage";
import MnyamsPage from "../pages/brands/MnyamsPage";
import PedigreePage from "../pages/brands/PedigreePage";
import PerfectFitPage from "../pages/brands/PerfectFitPage";
import ProbalancePage from "../pages/brands/ProbalancePage";
import RoyalCaninPage from "../pages/brands/RoyalCaninPage";
import WhiskasPage from "../pages/brands/WhiskasPage";
import ShebaPage from "../pages/brands/ShebaPage";
import PurinaPage from "../pages/brands/PurinaPage";
import EukaPage from "../pages/brands/EukaPage";
import BritPage from "../pages/brands/BritPage";

export const routes = [
    {path: "/", element: <MainPage/>, exact: true},
    {path: "/error", element: <ErrorPage/>, exact: true},

    {path: "/for-dog", element: <DogPage/>, exact: true},
    {path: "/for-dog/feeds", element: <DogFeedsPage/>, exact: true},
    {path: "/for-dog/threats", element: <DogThreatsPage/>, exact: true},
    {path: "/for-dog/vitamins", element: <DogVitaminsPage/>, exact: true},
    {path: "/for-dog/accessories", element: <DogVitaminsPage/>, exact: true},
    {path: "/for-dog/carries", element: <DogCarriesPage/>, exact: true},

    {path: "/for-cat", element: <CatPage/>, exact: true},
    {path: "/for-cat/feeds", element: <CatFeedsPage/>, exact: true},
    {path: "/for-cat/threats", element: <CatThreatsPage/>, exact: true},
    {path: "/for-cat/vitamins", element: <CatVitaminsPage/>, exact: true},
    {path: "/for-cat/accessories", element: <CatAccessoriesPage/>, exact: true},
    {path: "/for-cat/carries", element: <CatCarriesPage/>, exact: true},

    {path: "/for-fish", element: <FishPage/>, exact: true},
    {path: "/for-fish/feeds", element: <FishFeedsPage/>, exact: true},
    {path: "/for-fish/vitamins", element: <FishVitaminsPage/>, exact: true},
    {path: "/for-fish/aquariums", element: <FishAquariumsPage/>, exact: true},
    {path: "/for-fish/decorations", element: <FishDecorationsPage/>, exact: true},
    {path: "/for-fish/aquariumchemistry", element: <FishAquariumChemistryPage/>, exact: true},

    {path: "/for-bird", element: <BirdPage/>, exact: true},
    {path: "/for-bird/feeds", element: <BirdFeedsPage/>, exact: true},
    {path: "/for-bird/threats", element: <BirdThreatsPage/>, exact: true},
    {path: "/for-bird/vitamins", element: <BirdVitaminsPage/>, exact: true},
    {path: "/for-bird/accessories", element: <BirdAccessoriesPage/>, exact: true},
    {path: "/for-bird/cages", element: <BirdCagesPage/>, exact: true},

    {path: "/for-rodent", element: <RodentPage/>, exact: true},
    {path: "/for-rodent/feeds", element: <RodentFeedsPage/>, exact: true},
    {path: "/for-rodent/threats", element: <RodentThreatsPage/>, exact: true},
    {path: "/for-rodent/vitamins", element: <RodentVitaminsPage/>, exact: true},
    {path: "/for-rodent/accessories", element: <RodentAccessoriesPage/>, exact: true},
    {path: "/for-rodent/cages", element: <RodentCagesPage/>, exact: true},

    {path: "/for-reptile", element: <ReptilePage/>, exact: true},
    {path: "/for-reptile/feeds", element: <ReptileFeedsPage/>, exact: true},
    {path: "/for-reptile/vitamins", element: <ReptileVitaminsPage/>, exact: true},
    {path: "/for-reptile/decoration", element: <ReptileDecorationsPage/>, exact: true},
    {path: "/for-reptile/terrariums", element: <ReptileTerrariumsPage/>, exact: true},


    {path: "/brit", element: <BritPage/>, exact: true},
    {path: "/cesar", element: <CesarPage/>, exact: true},
    {path: "/dreamies", element: <DreamiesPage/>, exact: true},
    {path: "/eightinone", element: <EightinOnePage/>, exact: true},
    {path: "/eukanuba", element: <EukaPage/>, exact: true},
    {path: "/kitekat", element: <KitekatPage/>, exact: true},
    {path: "/mnyams", element: <MnyamsPage/>, exact: true},
    {path: "/pedigree", element: <PedigreePage/>, exact: true},
    {path: "/perfectfit", element: <PerfectFitPage/>, exact: true},
    {path: "/probalance", element: <ProbalancePage/>, exact: true},
    {path: "/purina", element: <PurinaPage/>, exact: true},
    {path: "/royalcanin", element: <RoyalCaninPage/>, exact: true},
    {path: "/sheba", element: <ShebaPage/>, exact: true},
    {path: "/whiskas", element: <WhiskasPage/>, exact: true}

]