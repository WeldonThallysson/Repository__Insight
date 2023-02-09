import { BrowserRouter,Routes,Route
 } from "react-router-dom";
import Home from "../Pages/Home";
import Repositorio from "../Pages/Repositorio";


export default function Rotas(){
    return(
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home/>} />  
            <Route exact path="/repositorio/:repositorio" element={<Repositorio/>}/>
          </Routes>  
        </BrowserRouter>
    )
}