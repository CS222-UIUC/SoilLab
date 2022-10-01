import './App.css';
import React from 'react';
import GridLayout from "react-grid-layout";
import styled from "styled-components";

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

const GridItemContent = styled.div`
  padding: 8px;
`;

const Root = styled.div`
  padding: 16px;
`;

export const Grid = () => {
  return (
    <Root>
      <GridLayout layout={layout} cols={5} rowHeight={300} width={1000}>
        <GridItemWrapper key="Carrot">
          <GridItemContent>Carrot</GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="Corn">
          <GridItemContent>Corn</GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="Soybean">
          <GridItemContent>Soybean</GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="Cabbage">
          <GridItemContent>Cabbage</GridItemContent>
        </GridItemWrapper>
        <GridItemWrapper key="Rice">
          <GridItemContent>Rice</GridItemContent>
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
