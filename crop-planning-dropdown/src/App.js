import './App.css';
import React, { useState } from 'react';
import { Formik, Form, useField } from 'formik';
import './App-custom.css';

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


function App() {
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

  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);

  return (
    <>
      <h1>Before you start planning...</h1>
      <h3>Please enter your information below so we can give you the best recommendations possible!</h3>

      <br></br>
      <button onClick={getLocation}>Get Location</button>
      <p>{status}</p>
      {lat && <p>Latitude: {lat}</p>}
      {lng && <p>Longitude: {lng}</p>}

      <Formik
        initialValues={{
          location: '',
          temperature: '', // select
          acceptedTerms: false, // checkbox
        }}

        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}

      >
        <Form>
          <MyTextInput
            label="Location"
            name="location"
            type="text"
            placeholder="Champaign, IL, USA"
          />

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
    </>
  );
}

export default App;