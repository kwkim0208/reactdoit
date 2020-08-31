import React from 'react';
import logo from './logo.svg';
import './App.css';
import PropsComponent from "./ch03/PropsComponent";
import BooleanComponent from "./ch03/BooleanComponent";
import StateExample from "./ch03/StateExample";

function App() {
    return (
    /*    <div>
            <PropsComponent name="두잇 리액트"/>
            <div><b>지루할 떄:</b><BooleanComponent bored/></div>
            <div><b>즐거울떄:</b><BooleanComponent/></div>
        </div>*/
        <div>
            <StateExample/>
        </div>

    );
}

export default App;
