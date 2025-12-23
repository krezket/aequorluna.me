import { BrowserRouter as Router, Routes, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Main from './screens/Main/Main';
import Blog from "./screens/Blog/Blog";
import Art from "./screens/Art/Art";
import './App.css'

export default function App() {

    return (
        <Router>
            <Routes>
                <Route path='/' element={<Main />}></Route>
                <Route path='/blog' element={<Blog/>}></Route>
                <Route path='/art' element={<Art/>}></Route>
            </Routes>
        </Router>
    )
};
