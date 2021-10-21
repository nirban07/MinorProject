import React from 'react';
import "./footer.css";
import {FaInstagram,FaTwitter,FaFacebook,FaLinkedin} from 'react-icons/fa';

export default function footer() {
    return (
        <div>
        <section class="footer">
        <div class="social">
            <a href="#"><FaInstagram/></a>
            <a href="#"><FaTwitter/></a>
            <a href="#"><FaFacebook/></a>
            <a href="#"><FaLinkedin/></a>
        </div>

        <ul class="list">
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">Services</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Terms</a>
            </li>
            <li>
                <a href="#">Privacy Policy</a>
            </li>
        </ul>

    </section>
    </div>
    )
}
