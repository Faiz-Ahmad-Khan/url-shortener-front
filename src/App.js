import React from 'react';
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import Login from './components/Login';
import PrivateComponent from './components/PrivateComponent';
import Dashboard from './components/Dashboard';
export const URL = process.env.REACT_APP_SERVER_URL;

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route element={<PrivateComponent />}>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/logout" element={<h1>Logout Component</h1>} />
                    </Route>
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    );
}

export default App;
