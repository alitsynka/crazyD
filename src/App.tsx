import React from 'react';
import './App.css';
import {Navbar} from "./components/navBar/NavBar";
import './assets/styles/reset.css'
import {Main} from "./components/main/Main";
import {AboutUs} from "./components/aboutUs/AboutUs";
import {OurProjects} from "./components/ourProjects/OurProjects";
import {JoinOurTeam} from "./components/joinOurTeam/JoinOurTeam";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <div className={"Container"}>
                <Main/>
                <AboutUs/>
                <div className="Wr">
                    <OurProjects/>
                    <JoinOurTeam/>
                </div>
            </div>

        </div>
    );
}

export default App;
