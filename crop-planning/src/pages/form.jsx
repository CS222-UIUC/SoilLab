import '../App.css';
import { useFormik } from 'formik';
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
// import {ref,push, child} from "firebase/database";
import { doc, setDoc} from "firebase/firestore"; 

function Form() {
    const [user, loading] = useAuthState(auth);
    const [name, setName] = useState("");
    // const navigate = useNavigate();
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
      // if (!user) return navigate("/");

      fetchUserName();
    }, [user, loading]);
    const formik = useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
        feedback: ''
      },
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
        const updates = {};
        updates['/' + user.uid] = values;
        setDoc(doc(db, "feedback", user.uid), updates);
      },
    });
    
    return (
      <div style={{color: 'white'}}>
        <h1>Feedback Form</h1>
        <h3>Your feedback is important to us.</h3>
        <h4>Please leave any comments or concerns you may have in this form and we will get back to you as soon as possible!</h4>
        <form onSubmit={formik.handleSubmit}>
         <label htmlFor="firstName">First Name</label>
         <input
           id="firstName"
           name="firstName"
           type="text"
           onChange={formik.handleChange}
           value={formik.values.firstName}
         />
   
         <label htmlFor="lastName">Last Name</label>
         <input
           id="lastName"
           name="lastName"
           type="text"
           onChange={formik.handleChange}
           value={formik.values.lastName}
         />
   
         <label htmlFor="email">Email Address</label>
         <input
           id="email"
           name="email"
           type="email"
           onChange={formik.handleChange}
           value={formik.values.email}
         />
  
        <label htmlFor="feedback">Feedback</label>
         <input
           id="feedback"
           name="feedback"
           type="feedback"
           onChange={formik.handleChange}
           value={formik.values.feedback}
         />
   
         <button type="submit">Submit</button>
       </form>
      </div>
    );
  }
  export default Form;