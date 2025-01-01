import About from "../components/about"
import CreateData from "../components/create-data";
import DepositData from "../components/data";
import Home from "../components/home"
import Services from "../components/services"
import { Routes,Route} from "react-router-dom";

export const AppRoutes = ()=>{
    return(
        <Routes>
            {<Route path="/" element={<Home/>}/>}
            { <Route path="/about" element={<About/>}/> }
            { <Route path="/services" element={<Services/>}/> }
            { <Route path="/datatbl" element={<DepositData/>}/> }
            { <Route path="/data" element={<DepositData/>}/> }
            { <Route path="/create-data" element={<CreateData/>}/> }
        
        </Routes>
    );
};
export default AppRoutes;