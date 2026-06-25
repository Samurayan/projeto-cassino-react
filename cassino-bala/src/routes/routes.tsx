import { Route, Routes, BrowserRouter } from "react-router-dom"
import App from "../App"
import Bla from "../Teste2"

function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/aula" element={<Bla/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router