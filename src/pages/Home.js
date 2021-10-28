import React, { useState } from 'react';
import Hero from '../Components/Hero';
import About from "../Components/About";
import Footer from "../Components/footer";
import Team from "../Components/Team";
import Banner from '../Components/Banner';
// import {Link} from 'react-router-dom';
import Services from '../Components/Services';
import FeaturedRooms from '../Components/FeaturedRooms';

import Register from '../Components/Register';
import Modal from '../Components/Modal';
import { FaFileExcel } from 'react-icons/fa';
import { red } from '@material-ui/core/colors';

export default function Home() {
    const [route,routePath] = useState("")

    return (
        <>
        <Hero>
            <Banner title="We provide solutions!" subtitle="Start your learning jounry today!">
              {/* <Link to="/Rooms" className="btn-primary ">GET STARTED</Link> */}
              <button className="f6 link dim ba ph3 pv2 mb2 dib black" onClick={()=>{routePath("signin")}}>Get started</button>
            </Banner>
            
            <Modal  routePath = {routePath} route={route} />
            <Register routePath = {routePath} route={route}/>
        </Hero>
        <About />
        <Services/>
        {/* <FeaturedRooms /> */}
        <Team />
        <Footer />
       
        </>
    )
}
