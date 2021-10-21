import React from 'react';
import "./Team.css";
import Title from './Title';
import {FaInstagram,FaFacebook,FaLinkedin} from 'react-icons/fa';
import Team1 from "../images/team-1.jpg";
import Team2 from "../images/team-2.jpg";
import Team3 from "../images/team-3.jpg";

export default function Team() {
    return (
        <div>
            <section className="featured-rooms">
                <Title title="Our team" />
            </section>
    <div class="container">
        <div class="card">
            <div class="content">
                <div class="imgBx">
                    <img src={Team1} alt="team1"/>
                </div>
                <div class="contentBx">
                    <h4>James Ford</h4>
                </div>
                <div class="sci">
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaLinkedin /></a>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="content">
                <div class="imgBx">
                    <img src={Team2} alt="team2"/>
                </div>
                <div class="contentBx">
                    <h4>Ann Brown</h4>
                </div>
                <div class="sci">
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaLinkedin /></a>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="content">
                <div class="imgBx">
                    <img src={Team3} alt="team3"/>
                </div>
                <div class="contentBx">
                    <h4>Ben Jason</h4>
                </div>
                <div class="sci">
                    <a href="#"><FaFacebook /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaLinkedin /></a>
                </div>
            </div>
        </div>

    </div>
    </div>
    )
}
