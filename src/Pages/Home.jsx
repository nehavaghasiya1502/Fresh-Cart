import React from 'react';
import Intro from '../Components/Homepages/Intro';
import Productpage from '../Components/Homepages/Productpage';
import Logoslider from '../Components/Homepages/Logoslider';
import Discountabout from '../Components/Aboutpages/Discountabout';
import Sliderabout from '../Components/Aboutpages/Sliderabout';
import Dealhome from '../Components/Homepages/Dealhome';
import Newssection from '../Components/Newspages/Newssection';

const App = () => {
  return (
    <>
    <Intro></Intro>
    <Productpage></Productpage>
    <Dealhome></Dealhome>
    <Sliderabout></Sliderabout>
    <Discountabout></Discountabout>
    <Newssection></Newssection>
    <Logoslider></Logoslider>
    </>
  )
}

export default App;
