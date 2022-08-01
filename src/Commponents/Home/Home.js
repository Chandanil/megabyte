import { Banner } from "./Banner/Banner";
import { About } from "./About/About";
import { Client } from "./Client/Client";
import { Portfolio } from "./Portfolio/Portfolio";
import { Services } from "./Services/Services";
import { Testimonial } from "./Testimonial/Testimonial";
import { Video } from "./Video/Video";

export const Home = () => {
    return (
        <>
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