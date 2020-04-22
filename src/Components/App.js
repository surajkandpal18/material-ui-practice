import React,{useState} from 'react';
import Header from './Ui/Header.js';
import theme from './Ui/Theme.js';
import Footer from './Ui/Footer.js';


import {  ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from './LandingPage.js'
import Services from './Services.js'
import CustomSoftware from './CustomSoftware.js'
import MobileApps from './MobileApps.js'
import Websites from './Websites.js'
import Revolution from './Revolution.js'
import AboutUs from './AboutUs.js'
import ContactUs from './Contactus.js'
import Estimate from './Estimate.js'

function App() {
    const [value, setValue] = useState(0);
    const [selectedIndex,setSelectedIndex]=useState(0)

  return (
    <ThemeProvider theme={theme}>
    
     <BrowserRouter>
    <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
   
      <Switch>
        <Route exact path='/' render={(props)=><LandingPage  setValue={setValue} setSelectedIndex={setSelectedIndex}/>}/>
        <Route exact path='/services' render={(props)=><Services  setValue={setValue} setSelectedIndex={setSelectedIndex}/>}/>
        <Route exact path='/customsoftwares' render={(props)=><CustomSoftware  setValue={setValue} setSelectedIndex={setSelectedIndex}/>}/>
        <Route exact path='/mobileapps' render={(props)=><MobileApps  setValue={setValue} setSelectedIndex={setSelectedIndex}/>}/>
        <Route exact path='/websites'render={(props)=><Websites  setValue={setValue} setSelectedIndex={setSelectedIndex}/>}/>
        <Route exact path='/revolution' render={(props)=><Revolution  setValue={setValue} setSelectedIndex={setSelectedIndex}/>}/>
        <Route exact path='/about' render={(props)=><AboutUs  setValue={setValue} setSelectedIndex={setSelectedIndex}/>}/>
        <Route exact path='/contact' render={(props)=><ContactUs  setValue={setValue} setSelectedIndex={setSelectedIndex}/>}/>
        <Route exact path='/estimate' render={(props)=><Estimate  setValue={setValue} setSelectedIndex={setSelectedIndex}/>}/>
      </Switch>
      <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
      </BrowserRouter>
  
    </ThemeProvider>
  );
}

export default App;

