import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import API from './utils/API.js';
import Main from './screens/Main/Main';
import Blog from "./screens/Blog/Blog";
import Art from "./screens/Art/Art";
import Sami from "./screens/Sami-Only/Sami-Only";
import './App.css'

export default function App() {
  const [token, setToken] = useState("");
  const [userId, setUserId] = useState(null);
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [userFollowers, setUserFollowers] = useState([]);
  const [userFollowing, setUserFollowing] = useState([]);

  useEffect(() => {
    const storedToken = window.sessionStorage.getItem("token");

    if (!storedToken) {
      return;
    }

    API.verifyToken(storedToken)
      .then((data) => {
        setToken(storedToken);
        setUserId(data.id);
        setUsername(data.username);
        setFullName(data.fullName);
        setEmail(data.email);
        setUserFollowers(data.followers);
        setUserFollowing(data.following);
      })
      .catch((err) => {
        console.log("oh noes");
        console.log(err);
      });
  }, []);

    return (
        <Router>
            <Routes>
                <Route path='/' element={<Main />}></Route>
                <Route path='/blog' element={<Blog/>}></Route>
                <Route path='/art' element={<Art/>}></Route>
                <Route path='/sami-only' element={
                    <Sami
                        type='signup'
                        userId={userId}
                        setUserId={setUserId}
                        setEmail={setEmail}
                        setFullName={setFullName}
                        setUsername={setUsername}
                        setToken={setToken}
                    />}>
                </Route>
            </Routes>
        </Router>
    )
};
