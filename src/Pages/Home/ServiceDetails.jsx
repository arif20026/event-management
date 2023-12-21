import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../shared/Footer/Footer";

const ServiceDetails = () => {
    const { id } = useParams()
    const data = useLoaderData()

    console.log(data)

    const [service, setService] = useState([])

    useEffect( () => {
            const ser = data?.find(item => item.id == id)
            console.log(ser)

            setService(ser)


        }

    , [])

    return (
        <div>

            <Navbar></Navbar>

           

                    <div className="space-y-4 mx-40 my-4 flex flex-col justify-center">




                        <h3 className="text-center  text-4xl font-bold">{service.name}</h3>
                        <h3 className="text-center  text-xl font-bold">Price : {service.price}</h3>

                        <img src={service.image} className='w-50 h-60 mx-40 border border-red-300' alt="" />



                        <h1 className="mb-[300px]">{service.detail_description}</h1>





                    </div>

          
            

            <Footer></Footer>

        </div>
    );
};

export default ServiceDetails;