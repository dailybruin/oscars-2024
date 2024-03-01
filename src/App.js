import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import DesktopGrid from './components/DesktopGrid';
import CoverageGrid from './components/CoverageGrid';

function App() {
  // const [ data, setData ] = useState(null);
  
  // useEffect(() => {
	// 	fetch("https://kerckhoff.dailybruin.com/manage/packages/flatpages/oscars-2024")
	// 	.then(res => res.json())
	// 	.then(res => setData(res.data['article.aml']))
  // }, [])

  // return data && (
  //   <div className="App">
  //     <Header/>
  //     Hello Daily Bruin!
  //     <Footer/>
  //   </div>
  // );

  const Card = styled.div`
    width: 100%;
    height: 100%;
    background-color: #DFAF98;
    padding: 20px;
    border: 10px red solid;
`;

  const testCards1 = [];
  for (let i = 0; i < 10; i++) {
    testCards1.push(<Card>TODO</Card>)
  }

  const testCards2 = [];
  for (let i = 0; i < 4; i++) {
    testCards2.push(<Card>TODO</Card>)
  }

  return (
    <div className="App">
      <Header/>
      <DesktopGrid cards={testCards1}/>
      <CoverageGrid cards={testCards2} vertical_offset={'-18%'}/>
      <Footer/>
    </div>
  );
}

export default App;
