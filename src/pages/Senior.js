import React from 'react';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import {Link} from 'react-router-dom';
import SerniorsMeet from "../Components/senior";
import Footer from "../Components/footer";


export default function Room(){
    return (
      <>
      <Hero hero="roomsHero">
        <Banner title="Meet Your Seniors">
        <Link to='/' className="btn-primary">return home</Link>
        </Banner>
      </Hero>
      <SerniorsMeet />
      <Footer />
      </>
    )
}

