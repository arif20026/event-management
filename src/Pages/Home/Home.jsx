import { useLoaderData } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
import Banner from "./Banner";
import ServiceCard from "./ServiceCard";
import Features from "./features";
import CustomerReview from "./CustomerReview";
// import ServiceDetails from "./ServiceDetails";

const Home = () => {

    const services =useLoaderData()
    // console.log(services)
    
    return (
        <div className=" ">

            <Navbar></Navbar>

            <Banner></Banner>

            <div className="my-10">
                <h3 className="text-center text-4xl font-bold">Services</h3>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-4 mb-10">
                {
                    services.map( service => <ServiceCard key={service.id} services={service}></ServiceCard>)
                }
            </div>

           <Features></Features>

           <CustomerReview></CustomerReview>


            <Footer></Footer>
            
        </div>
    );
};

export default Home;