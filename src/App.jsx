import { BrowserRouter } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/home"

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path= "*" element={<h1>404</h1>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App