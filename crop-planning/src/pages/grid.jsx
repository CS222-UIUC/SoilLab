import GridLayout from "react-grid-layout";
import styled from "styled-components";
import {useState} from 'react';
import { Formik, Form, useField } from 'formik';

const layout = [
    { i: "Carrot", x: 0, y: 0, w: 1, h: 1 },
    { i: "Corn", x: 1, y: 0, w: 1, h: 1 },
    { i: "Soybean", x: 2, y: 0, w: 1, h: 1 },
    { i: "Cabbage", x: 0, y: 0, w: 1, h: 1 },
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

export const Grid = () => {
    const [isHovering, setIsHovering] = useState(false);
  
    const handleMouseOver = () => {
      setIsHovering(true);
    };
  
    const handleMouseOut = () => {
      setIsHovering(false);
    };

    function addCrop() {
      var canvas = document.querySelector("GridCanvas");
      var ctx = canvas.getContext("2d");
      console.log(canvas);
      ctx.fillStyle = 'red';
      ctx.fillRect(10,10,200,200);  
    }

    return (
      <Root>
        <GridLayout layout={layout} cols={3} rows={3} rowHeight={120} width={360}>
          <GridItemWrapper key="Carrot" data-testid="Carrot">
            <div>
              <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Carrot</div>
              {!isHovering && <img src="https://static.thenounproject.com/attribution/1211981-600.png" alt = "carrot" width="95" height="95"/>}
              {isHovering && <h2>This vegetable is orange.</h2>}
            </div>
          </GridItemWrapper>
          <GridItemWrapper key="Corn" data-testid="Corn">
            <div>
              <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Corn</div>
              {!isHovering && <img src="https://static.thenounproject.com/attribution/1197411-600.png" alt = "corn" width="95" height="95"/>}
              {isHovering && <h2>This vegetable is yellow (usually).</h2>}
            </div>
          </GridItemWrapper>
          <GridItemWrapper key="Soybean" data-testid="Soybean">
            <div>
              <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Soybean</div>
              {!isHovering && <img src="https://static.thenounproject.com/attribution/5164867-600.png" alt = "soybean" width="95" height="95"/>}
              {isHovering && <h2>I have no clue what color this legume is. Tan?</h2>}
            </div>
          </GridItemWrapper>
          <GridItemWrapper key="Cabbage" data-testid="Cabbage">
            <div>
              <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Cabbage</div>
              {!isHovering && <img src="https://static.thenounproject.com/attribution/1482111-600.png" alt = "cabbage" width="95" height="95"/>}
              {isHovering && <h2>This vegetable is green.</h2>}
            </div>
          </GridItemWrapper>
          <GridItemWrapper key = "Rice" data-testid="Rice">
            <div>
              <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Rice</div>
              {!isHovering && <img src="https://static.thenounproject.com/attribution/56585-600.png" alt = "rice" width="95" height="95"/>}
              {isHovering && <h2>This grain is brown.</h2>}
            </div>
          </GridItemWrapper>
        </GridLayout>

        <canvas id="GridCanvas" width="600" height="600" onClick={() => {
            
            var canvas = document.getElementById("GridCanvas");
            var ctx = canvas.getContext("2d");
            var rect = canvas.getBoundingClientRect();

            var e = window.event;

            var x = e.clientX - (rect.left);
            var y = e.clientY - (rect.top);

            ctx.fillStyle = 'red';
            ctx.fillRect(x,y,10,10);

          }}>
        </canvas>

        <br></br>
        <br></br>
        <br></br>

        <Formik enableReinitialize
          initialValues={{
            crop: '' // select
          }
        }

          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}

        >
          <Form method="POST">
            <MySelect label="Select Crop" name="crop">
              <option value="">Select a crop to put on the grid</option>
              <option value="Corn">Corn!</option>
              <option value="Cabbage">Cabbage!</option>
              <option value="Rice">Rice!</option>
              <option value="Soybean">Soybean!</option>
              <option value="Carrot">Carrot!</option>
            </MySelect>

            <button type="submit">Submit</button>
          </Form>
        </Formik>

      </Root>

    );
  };
  export default Grid;