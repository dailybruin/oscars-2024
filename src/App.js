import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import DesktopGrid from './components/DesktopGrid';

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

  const testCards = [];
  for (let i = 0; i < 5; i++) {
    testCards.push(<Card>TODO</Card>)
  }

  return (
    <div className="App">
      <Header/>
      <DesktopGrid cards={testCards}/>
      <Footer/>
    </div>
  );
}

export default App;
