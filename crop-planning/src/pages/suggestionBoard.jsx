import React, { useState } from "react";
import "./Board/suggestionBoard.css"
import { Link } from "react-router-dom";

const SuggestionBoard = () => {
    const [showAnalysis, setShowAnalysis] = useState(false);
    // const [showButton, setShowButton] = useState(false);
    // const showAlert = () => {
    //   alert("I'm an alert");
    // }
  
    return (
      <>
      {!showAnalysis? 
      <div className="text">
      Analyze your grid layout!
      </div> : null}
      
      {showAnalysis? <div className="text__analysis">
        <b><i>SoilLab analyzed your grid layout: </i></b><br/>
        <br/>
        <b><font color="#3C8586">Carrot at (1,2)</font></b> and <b><font color="#3C8586">Corn at (2,3)</font></b> do not follow the recommended crop distance. <br/>
        <br/>
        For the selected season and environment, <b><font color="#3C8586">Rice</font></b> is not recommended.
        <br/>
        <br/>
        <br/>
        <div className="shadow">Don't agree with our suggestions? Give feedback <Link to="/form">here</Link>.</div>
      </div> : null}

      {!showAnalysis? <button className="btn" onClick={() => setShowAnalysis(!showAnalysis)}>Show Analysis</button> : null}
      {showAnalysis? <button className="btn" onClick={() => setShowAnalysis(!showAnalysis)}>Hide Analysis</button> : null}
      
      </>
    );
  }

export default SuggestionBoard;