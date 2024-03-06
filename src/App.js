import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './components/Landing';
import DesktopGrid from './components/DesktopGrid';
import CoverageGrid from './components/CoverageGrid';
import Blurb from "./components/Blurb";
import InteractiveSection from "./components/Interactive";


function App() {
  const [ data, setData ] = useState(null);
  
  useEffect(() => {
		fetch("https://kerckhoff.dailybruin.com/api/packages/flatpages/oscars-2024")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

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

  return data && (
    <div className="App">
      <Header/>
      <Landing data={data}></Landing>
      <Blurb blurb_text={data.blurb[0].blurb_text}></Blurb>
      <DesktopGrid articles={data.articles}/>
      <InteractiveSection></InteractiveSection>
      <CoverageGrid articles={data.related_coverage} vertical_offset={'-18%'}/>
      <Footer/>
    </div>
  );
}

export default App;
