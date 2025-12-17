import React from 'react';
import Intro from '../Components/Homepages/Intro';
import Productpage from '../Components/Homepages/Productpage';
import Logoslider from '../Components/Homepages/Logoslider';
import Discountabout from '../Components/Aboutpages/Discountabout';
import Sliderabout from '../Components/Aboutpages/Sliderabout';

const App = () => {
  return (
    <>
    <Intro></Intro>
    <Productpage></Productpage>
    <Discountabout></Discountabout>
    <Sliderabout></Sliderabout>
    <Logoslider></Logoslider>
    </>
  )
}

export default App;
