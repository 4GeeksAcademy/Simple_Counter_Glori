//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";


// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

function SimpleCounter(props) {
    return (
        <div className="container mt-4" style={{ backgroundColor: "#FFEBFB" }}>
            <div className="row">
                <div className="col">
                    <img src="https://www.vocovo.com/app/uploads/2020/06/efficient-colleagues-icon@2x.png" />
                </div>
                <div className="col rounded"><h1>{props.SextoDigito % 10}</h1></div>
                <div className="col"><h1>{props.QuintoDigito % 10}</h1></div>
                <div className="col"><h1>{props.CuartoDigito % 10}</h1></div>
                <div className="col"><h1>{props.TercerDigito % 10}</h1></div>
                <div className="col"><h1>{props.SegundoDigito % 10}</h1></div>
                <div className="col"><h1>{props.PrimerDigito % 10}</h1></div>
            </div>
        </div>
    )
}

SimpleCounter.propTypes = {
    SextoDigito: propTypes.number,
    QuintoDigito: propTypes.number,
    CuartoDigito: propTypes.number,
    TercerDigito: propTypes.number,
    SegundoDigito: propTypes.number,
    PrimerDigito: propTypes.number,
}

let segundos = 0;

setInterval(function () {
    let seis = Math.floor(segundos / 100000);
    let cinco = Math.floor(segundos / 10000);
    let cuatro = Math.floor(segundos / 1000);
    let tres = Math.floor(segundos / 100);
    let dos = Math.floor(segundos / 10);
    let uno = Math.floor(segundos / 1);
    segundos++,

        //render your react application
        ReactDOM.render(<SimpleCounter PrimerDigito={uno} SegundoDigito={dos} TercerDigito={tres} CuartoDigito={cuatro} QuintoDigito={cinco} SextoDigito={seis} />, document.querySelector("#app"));
}, 1000)
