import './App.css';
import React from 'react';
import GridLayout from "react-grid-layout";
import styled from "styled-components";
import {useState} from 'react';

const layout = [
  { i: "Carrot", x: 0, y: 0, w: 1, h: 1 },
  { i: "Corn", x: 1, y: 0, w: 1, h: 1 },
  { i: "Soybean", x: 2, y: 0, w: 1, h: 1 },
  { i: "Cabbage", x: 3, y: 0, w: 1, h: 1 },
  { i: "Rice", x: 4, y: 0, w: 1, h: 1 }
];

const GridItemWrapper = styled.div`
  background: #f5f5f5;
`;

const Root = styled.div`
  padding: 16px;
`;

export const Grid = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <Root>
      <GridLayout layout={layout} cols={5} rowHeight={110} width={600}>
        <GridItemWrapper key="Carrot" data-testid="Carrot">
          <div>
            <div>
              <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Carrot</div>
              {isHovering && <h2>This vegetable is orange.</h2>}
            </div>
          </div>
        </GridItemWrapper>
        <GridItemWrapper key="Corn" data-testid="Corn">
          <div>
            <div>
              <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Corn</div>
              {isHovering && <h2>This vegetable is yellow (usually).</h2>}
            </div>
          </div>
        </GridItemWrapper>
        <GridItemWrapper key="Soybean" data-testid="Soybean">
          <div>
            <div>
              <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Soybean</div>
              {isHovering && <h2>I have no clue what color this legume is. Tan?</h2>}
            </div>
          </div>
        </GridItemWrapper>
        <GridItemWrapper key="Cabbage" data-testid="Cabbage">
          <div>
            <div>
              <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Cabbage</div>
              {isHovering && <h2>This vegetable is green.</h2>}
            </div>
          </div>
        </GridItemWrapper>
        <GridItemWrapper key = "Rice" data-testid="Rice">
          <div>
            <div>
              <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Rice</div>
              {isHovering && <h2>This grain is brown.</h2>}
            </div>
          </div>
        </GridItemWrapper>
      </GridLayout>
    </Root>
  );
};

function App() {
  return (
    <div className="App">
      <Grid></Grid>
    </div>
  );
}

export default App;