import React, { useEffect, useState } from 'react';
import Title from './Title';
import "./Senior.css";
import { Link } from 'react-router-dom';
//import Abc from "../images/team-1.jpg";
// import Axios from 'axios';

export default function Senior() {
    const [data, setData] = useState([]);
    const getUsers = async () => {
        // Axios.get("https://api.github.com/users").then(
        //     (response) => {
        //         console.log(response);
        //         setData(response.data.data);
        //     }
        // )
                const response = await fetch("https://api.github.com/users");
                // console.log(response);
                setData(await response.json());
                console.log(data);
            }
    useEffect(() => {
                getUsers()
            },[]);
        return (
            <>
                <section className="services">
                    <Title title='Meet Your Seniors' />
                </section>
                <div className="body">
                    <div className="container_card">
                        {
                            data.map((curElem) => {
                                return (
                                    <div>
                                        <div className="card_api">
                                            <div className="imgBox">
                                                <img src={curElem.avatar_url} alt="one" />
                                            </div>
                                            <div className="content">
                                                <h2>{curElem.login}{curElem.last_name}</h2>
                                            </div>
                                            <Link to='/' className="btn-primary">Start Chatting</Link>
                                        </div>
                                    </div>
                                )
                            })
                        }

                        {/* <div className="card_api">
                        <div className="imgBox">
                            <img src={Abc} alt="one" />
                        </div>
                        <div className="content">
                            <h2>Shalini</h2>
                        </div>
                        <Link to='/' className="btn-primary">Start Chatting</Link>
                    </div>
                    <div className="card_api">
                        <div className="imgBox">
                            <img src={Abc} alt="one" />
                        </div>
                        <div className="content">
                            <h2>Shalini</h2>
                        </div>
                        <Link to='/' className="btn-primary">Start Chatting</Link>
                    </div>
                    <div className="card_api">
                        <div className="imgBox">
                            <img src={Abc} alt="one" />
                        </div>
                        <div className="content">
                            <h2>Shalini</h2>
                        </div>
                        <Link to='/' className="btn-primary">Start Chatting</Link>
                    </div>
                    <div className="card_api">
                        <div className="imgBox">
                            <img src={Abc} alt="one" />
                        </div>
                        <div className="content">
                            <h2>Shalini</h2>
                        </div>
                        <Link to='/' className="btn-primary">Start Chatting</Link>
                    </div>
                    <div className="card_api">
                        <div className="imgBox">
                            <img src={Abc} alt="one" />
                        </div>
                        <div className="content">
                            <h2>Shalini</h2>
                        </div>
                        <Link to='/' className="btn-primary">Start Chatting</Link>
                    </div>
                    <div className="card_api">
                        <div className="imgBox">
                            <img src={Abc} alt="one" />
                        </div>
                        <div className="content">
                            <h2>Shalini</h2>
                        </div>
                        <Link to='/' className="btn-primary">Start Chatting</Link>
                    </div> */}
                    </div>
                </div>
            </>
        )
    }
