import React, { useEffect, useState } from "react";
import "./Board/suggestionBoard.css"
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
// import {ref,push, child} from "firebase/database";
import { doc, setDoc} from "firebase/firestore"; 

const SuggestionBoard = () => {
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();

      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) {
      alert("Please login or create an account.")
      return navigate("/");
    }

    fetchUserName();
  }, [user, loading]);
  
    return (
      <>
      <div style={{position: 'fixed', left: '150px', top: '100px'}}>
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
      </div>
      </>
    );
  }

export default SuggestionBoard;