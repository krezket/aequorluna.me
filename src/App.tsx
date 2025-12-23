import { BrowserRouter as Router, Routes, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Main from './screens/Main/Main';
import './App.css'

export default function App() {

    return (
        <Router>
            <Routes>
                <Route path='/' element={<Main />}>
                </Route>
                
            </Routes>
        </Router>
    )
};
