import { useLoaderData } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
import Banner from "./Banner";
import ServiceCard from "./ServiceCard";
// import ServiceDetails from "./ServiceDetails";

const Home = () => {

    const services =useLoaderData()
    // console.log(services)
    
    return (
        <div className="space-y-5 ">

            <Navbar></Navbar>

            <Banner></Banner>

            <div className="">
                <h3 className="text-center text-4xl font-bold">Services</h3>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4">
                {
                    services.map( service => <ServiceCard key={service.id} services={service}></ServiceCard>)
                }
            </div>

            
           






            <Footer></Footer>
            
        </div>
    );
};

export default Home;