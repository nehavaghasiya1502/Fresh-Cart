import React from 'react';
import Header from './Components/Header';
import Intro from './Pages/Intro';
import Productpage from './Pages/Productpage';
import Logoslider from './Pages/Logoslider';

const App = () => {
  return (
    <>
    <Header></Header>
    <Intro></Intro>
    <Productpage></Productpage>
    {/* <Logoslider></Logoslider> */}
    </>
  )
}

export default App;
