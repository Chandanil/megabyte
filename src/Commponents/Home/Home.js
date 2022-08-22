import { Banner } from "./Banner/Banner";
import { About } from "./About/About";
import { Client } from "./Client/Client";
import { Portfolio } from "./Portfolio/Portfolio";
import { Services } from "./Services/Services";
import { Testimonial } from "./Testimonial/Testimonial";
import { Video } from "./Video/Video";
// import axios from 'axios';
// import React,{ useState, useEffect } from "react";
export const Home = () => {
    // const [users, setUsers]= useState();
    // useEffect(() => {
    //     fetchuser()
    // }, [])
    // const fetchuser= () =>{
    //     axios.get('/api/allusers').then(({data}) => {
    //     setUsers(data);
    // });
    // }
    
    
    return (
        <>
        {/* {users?.data?.map((items)=>{
            return(
                <li>{items.name}</li>
            )
       
    })} */}
        <Banner />
        <Services />
        <About />
        <Video />
        <Portfolio />
        <Testimonial />
        <Client />
        </>
    )
}