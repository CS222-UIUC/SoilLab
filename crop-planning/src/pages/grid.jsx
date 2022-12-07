import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import GridLayout from "react-grid-layout";
import styled from "styled-components";
// import {useState} from 'react';
import { Formik, Form, useField } from 'formik';
import { CropBoard } from "../backend/cropBoard";
import { CropModels } from '../backend/cropModelLibrary';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "./firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
// import {ref,push, child} from "firebase/database";
import { doc, setDoc} from "firebase/firestore"; 

const layout = [
    { i: "Carrot", x: 0, y: 0, w: 1, h: 1 },
    { i: "Corn", x: 1, y: 0, w: 1, h: 1 },
    { i: "Soybean", x: 2, y: 0, w: 1, h: 1 },
    { i: "Lettuce", x: 0, y: 0, w: 1, h: 1 },
    { i: "Rice", x: 1, y: 1, w: 1, h: 1 }
  ];
  
const GridItemWrapper = styled.div`
  background: #f5f5f5;
  text-align: center;
  margin: 1rem;
`;
  
const Root = styled.div`
  margin: 16px;
`;

export let suggestion_str = "";

const MySelect = ({ label, ...props }) => {
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [field, meta] = useField(props);
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
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};

export const Grid = () => {

    const [isHovering, setIsHovering] = useState(false);
  
    const handleMouseOver = () => {
      setIsHovering(true);
    };
  
    const handleMouseOut = () => {
      setIsHovering(false);
    };

    let cropBoard = new CropBoard(600,600);
    let currCropModel = null;
    let cropColor = { "Carrot": "orange", "Corn": "yellow", "Soybean": "red", "Lettuce": "green", "Rice": "brown"};

    return (
      <Root>
        <div style={{position: 'fixed', left: '230px', top: '100px'}}>
        <GridLayout layout={layout} cols={3} rows={3} rowHeight={120} width={360}>
          <GridItemWrapper key="Carrot" data-testid="Carrot">
            <div color="red">
              <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Carrot</div>
              {!isHovering && <img src="https://static.thenounproject.com/attribution/1211981-600.png" alt = "carrot" width="95" height="95"/>}
              {isHovering && <h2>This crop is orange in the grid.</h2>}
            </div>
          </GridItemWrapper>
          <GridItemWrapper key="Corn" data-testid="Corn">
            <div>
              <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Corn</div>
              {!isHovering && <img src="https://static.thenounproject.com/attribution/1197411-600.png" alt = "corn" width="95" height="95"/>}
              {isHovering && <h2>This crop is yellow in the grid.</h2>}
            </div>
          </GridItemWrapper>
          <GridItemWrapper key="Soybean" data-testid="Soybean">
            <div>
              <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Soybean</div>
              {!isHovering && <img src="https://static.thenounproject.com/attribution/5164867-600.png" alt = "soybean" width="95" height="95"/>}
              {isHovering && <h2>This crop is red in the grid.</h2>}
            </div>
          </GridItemWrapper>
          <GridItemWrapper key="Lettuce" data-testid="Lettuce">
            <div>
              <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Lettuce</div>
              {!isHovering && <img src="https://static.thenounproject.com/attribution/1482111-600.png" alt = "lettuce" width="95" height="95"/>}
              {isHovering && <h2>This crop is green in the grid.</h2>}
            </div>
          </GridItemWrapper>
          <GridItemWrapper key = "Rice" data-testid="Rice">
            <div>
              <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Rice</div>
              {!isHovering && <img src="https://static.thenounproject.com/attribution/56585-600.png" alt = "rice" width="95" height="95"/>}
              {isHovering && <h2>This crop is brown in the grid.</h2>}
            </div>
          </GridItemWrapper>
        </GridLayout>

        </div>

        <canvas id="GridCanvas" width="600" height="600" onClick={() => {
            
            if (currCropModel != null) {
              var canvas = document.getElementById("GridCanvas");
              var ctx = canvas.getContext("2d");
              var rect = canvas.getBoundingClientRect();

              var e = window.event;

              var x = e.clientX - (rect.left);
              var y = e.clientY - (rect.top);

              let crop = currCropModel;
              var add_success = cropBoard.add_crop(crop, x, y);

              if (add_success) {
                ctx.fillStyle = cropColor[crop.name];
                ctx.fillRect(x - crop.attributes.radius - 1, y - crop.attributes.radius - 1, 2 * crop.attributes.radius + 1, 2 * crop.attributes.radius + 1);
              } else {
                // console.log("adding crop failed!");
                alert("adding crop failed!");
              }
            }

          }}>
        </canvas>

        <br></br>
        <br></br>
        <br></br>

        <div style={{position: 'fixed', left: '245px', bottom: '120px', right: '20px'}}>

        <Formik enableReinitialize
          initialValues={{
            crop: '' // select
          }
        }

          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {

              if (values["crop"] === "Corn") {
                currCropModel = CropModels.Corn;
              } else if (values["crop"] === "Lettuce") {
                currCropModel = CropModels.Lettuce;
              } else if (values["crop"] === "Rice") {
                currCropModel = CropModels.Rice;
              } else if (values["crop"] === "Soybean") {
                currCropModel = CropModels.Soybean;
              } else if (values["crop"] === "Carrot") {
                currCropModel = CropModels.Carrot;
              } else {
                currCropModel = null;
              }

              alert(JSON.stringify(currCropModel, null, 2));
              // alert(cropBoard.suggestion_string());
              setSubmitting(false);
            }, 400);
          }}


        >
          <Form method="POST">
            <MySelect label="Select Crop" name="crop">
              <option value="">Select a crop to put on the grid</option>
              <option value="Corn">Corn!</option>
              <option value="Lettuce">Lettuce!</option>
              <option value="Rice">Rice!</option>
              <option value="Soybean">Soybean!</option>
              <option value="Carrot">Carrot!</option>
            </MySelect>

            <button type="submit">Switch Crop</button>
            <button type="button" onClick={() => {
              suggestion_str = cropBoard.suggestion_string();
              alert(suggestion_str);
            }} >Analyze</button>
            <button type="button" onClick={() => {
              const canvas = document.getElementById("GridCanvas");
              const context = canvas.getContext('2d');
              context.clearRect(0, 0, canvas.width, canvas.height);
              cropBoard.clear();
            }} >Clear Grid</button>
          </Form>
        </Formik>
        </div>
      </Root>
    );
  };

  export default Grid;