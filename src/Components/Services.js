import React, { Component } from 'react';
import Title from './Title';
import {FaHiking,FaDownload,FaComments,FaMoneyBill} from 'react-icons/fa';

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaHiking/>,
                title:"Free Guidelines",
                info:'The company is run by three generations of family, and with the 4th generation working their way up, we hope to continue the family tradition for years to come.',
            },
            {
                icon:<FaDownload/>,
                title:"Free Download Courses",
                info:'The company is run by three generations of family, and with the 4th generation working their way up, we hope to continue the family tradition for years to come.',
            },
            {
                icon:<FaComments/>,
                title:"Chats With Seniors",
                info:'The company is run by three generations of family, and with the 4th generation working their way up, we hope to continue the family tradition for years to come.',
            },
            {
                icon:<FaMoneyBill/>,
                title:"Paid Courses",
                info:'The company is run by three generations of family, and with the 4th generation working their way up, we hope to continue the family tradition for years to come.',
            }
        ]
    }
    render() {
        return (
            <section className="services">
            <Title title='services'/>
            <div className="services-center">
                {this.state.services.map((item,index)=>{
                    return <article key={index} className="service">
                        <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
                    </article>
                })}
            </div>
            </section>
        )
    }
}
