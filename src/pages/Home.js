import React, { useState } from 'react';
import Hero from '../Components/Hero';
import About from "../Components/About";
import Footer from "../Components/footer";
import Team from "../Components/Team";
import Banner from '../Components/Banner';
// import {Link} from 'react-router-dom';
import Services from '../Components/Services';
import FeaturedRooms from '../Components/FeaturedRooms';


import Modal from '../Components/Modal';
import { FaFileExcel } from 'react-icons/fa';
import { red } from '@material-ui/core/colors';

export default function Home() {
    const [show,setShow] = useState(false);

    return (
        <>
        <Hero>
            <Banner title="We provide solutions!" subtitle="Courses starting at $99">
              {/* <Link to="/Rooms" className="btn-primary ">GET STARTED</Link> */}
            </Banner>
            <button onClick={()=>setShow(true)}>Get Started</button>
            <Modal onClose={()=>setShow(false)} show={show}/>
        </Hero>
        <About />
        <Services/>
        <FeaturedRooms />
        <Team />
        <Footer />
       
        </>
    )
}
