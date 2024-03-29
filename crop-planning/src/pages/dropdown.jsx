import '../App.css';
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { Formik, Form, useField } from 'formik';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
// import {ref,push, child} from "firebase/database";
import { doc, setDoc} from "firebase/firestore"; 
// import axios from 'axios';

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <div>
      <label className="checkbox-input">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

/* eslint-disable */
function Dropdown() {
  const [user, loading] = useAuthState(auth);
  const [setName] = useState("");
  const navigate = useNavigate();


  /* eslint-disable */
  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const q = query(collection(db, "users"), where("uid", "==", user?.uid));
        const doc = await getDocs(q);
        const data = doc.docs[0].data();
  
        setName(data.name);
      } catch (err) {
        console.error(err);
        // alert("An error occured while fetching user data");
      }
    };

    if (loading) return;
    if (!user) {
      alert("Please login or create an account.")
      return navigate("/");
    }

    fetchUserName();
  }, [user, loading]);
  /* eslint-enable */

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      }, () => {
        setStatus('Unable to retrieve your location');
      });
    }
  }

  const [setLat] = useState(null); // param: lat
  const [setLng] = useState(null); // param: lng
  const [status, setStatus] = useState(null);
  // const [responseData, setResponseData] = useState({});

  // const API_endpoint = `https://api.openweathermap.org/data/2.5/weather?`;

  // const API_key = ``;

  // axios.get(`${API_endpoint}lat=${lat}&lon=${lng}&appid=${API_key}`)
  // .then((response) => {
  //   setResponseData(response.data)
  // })

  // const location_data = responseData.name + ", " + responseData.country;
  // const lat_long_data = lat + ", " + lng;

  return (
    <div style={{color: 'white', position: 'fixed', left: '275px', top: '150px'}}>
      <h1>Before you start planning...</h1>
      <h3>Please enter your information below so we can give you the best recommendations possible!</h3>

      {/* <br></br>
      <button onClick={getLocation}>Get Location</button>
      <p>{status}</p>
      {lat && <p>Latitude: {lat}</p>}
      {lng && <p>Longitude: {lng}</p>} */}

      <Formik enableReinitialize id="tempdata"
        initialValues={{
          location: '',
          temperature: '', // select
          acceptedTerms: false, // checkbox
        }
      }

        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
          const updates = {};
          updates['/' + user.uid] = values;
          setDoc(doc(db, "location", user.uid), updates);
        }}

      >
        <Form method="POST">
          <MyTextInput
            label="Location"
            name="location"
            type="text"
            placeholder="Anytown, USA"
            // value={lat_long_data}
            // value={location_data}
          />

          <button type="button" onClick={getLocation}>Get Location</button>
          <p>{status}</p>
          

          <MySelect label="Temperature Range" name="temperature">
            <option value="">Select the range that most closely matches your weather</option>
            <option value="-20">20°F and below</option>
            <option value="21-40">21-40°F</option>
            <option value="41-60">41-60°F</option>
            <option value="61-80">61-80°F</option>
            <option value="81+">81°F and above</option>
          </MySelect>

          <MyCheckbox name="acceptedTerms">
            &nbsp; I understand that my information will be used for giving recommendations and for no other purpose. 
          </MyCheckbox>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Dropdown;
