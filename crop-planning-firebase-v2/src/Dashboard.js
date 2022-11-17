import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
// import {ref,push, child} from "firebase/database";
import { doc, setDoc} from "firebase/firestore"; 

function Dashboard() {
  // eslint-disable-next-line no-unused-vars
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  var today  = new Date();
  var today_str = today.toLocaleDateString("en-US", options);
  var arr = today_str.split(/\s+/);
  var season = "Spring";
  if (['March', 'April', 'May'].includes(arr[1])) {
    season = "Spring";
  } else if (['June', 'July', 'August'].includes(arr[1])) {
    season = "Summer";
  } else if (['September', 'October', 'November'].includes(arr[1])) {
    season = "Autumn";
  } else {
    season = "Winter";
  }
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

  const [farmName, setFarmName] = useState(null);
  const [farmSize, setFarmSize] = useState(null);
  const [farmTemp, setFarmTemp] = useState(null);

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");

    fetchUserName();
  }, [user, loading]);

  const handleInputChange = (e) => {
      const {id , value} = e.target;
      if(id === "farmName"){
          setFarmName(value);
      }
      if(id === "farmSize"){
          setFarmSize(value);
      }
      if(id === "farmTemp"){
          setFarmTemp(value);
      }
  }

   const handleSubmit  = async () => {
    let farmDetails = {
      farmName : farmName,
      farmSize : farmSize,
      farmTemp : farmTemp,
    }       
    const updates = {};
    updates['/' + user.uid] = farmDetails;
    await setDoc(doc(db, "farms", user.uid), updates);
  }

  return (
    <div className="dashboard">
      <p>
      <div className="dashboard__container"> 
        <div className="date">Welcome, {name}!</div>
        <div className="text">Today is {today_str}.</div>
        <div className="text">We are in {season}!</div>
        <button className="dashboard__btn" onClick={logout}>
          Logout
        </button>
      </div>
      </p>
      <p>
      <div className="dashboard__container"> 
          <div className="form-body">
              <div className="username">
                  <label className="form__label" htmlFor="farmName">Farm Name </label>
                  <input onChange = {(e) => handleInputChange(e)} className="textBox" type="text" id="farmName" placeholder="Name"/>
              </div>
              <div className="lastname">
                  <label className="form__label" htmlFor="farmSize">Farm Size </label>
                  <input onChange = {(e) => handleInputChange(e)} className="textBox" type="text" id="farmSize"  placeholder="Size (acres)"/>
              </div>
              <div className="email">
                  <label className="form__label" htmlFor="farmTemp">Farm Temp </label>
                  <input onChange = {(e) => handleInputChange(e)} className="textBox" type="text" id="farmTemp"  placeholder="Current Avg Temp (°F)"/>
              </div>
          </div>
          <div className="footer">
              <button onClick={()=>handleSubmit()} type="submit" className="dashboard__btn">Submit</button>
          </div>
      </div>
      </p>
    </div>
  );
}

export default Dashboard;
