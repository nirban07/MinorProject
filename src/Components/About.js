import React, { Component } from 'react';
import Title from './Title';
import "./About.css";
import About from "../images/about.svg"

export default class FeaturedRooms extends Component {
    render() {
        return (
            <>
                <section className="featured-rooms">
                    <Title title="About us" />
                    <div className="fcontainer">
                        <div className="fbox1">
                            <img src={About} alt="about us" />
                        </div>
                        <div className="fbox2">
                            <h4>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores corrupti, illum soluta, quis corporis consequatur voluptate possimus dolorum harum cupiditate voluptatibus doloribus nihil libero beatae nobis, accusantium reprehenderit eaque quam.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores deserunt harum reprehenderit odio eum soluta delectus qui tempore? Sed excepturi voluptas illo placeat aspernatur vitae nihil necessitatibus a velit et?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores corrupti, illum soluta, quis corporis consequatur voluptate possimus dolorum harum cupiditate voluptatibus doloribus nihil libero beatae nobis, accusantium reprehenderit eaque quam.
                            </h4>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
