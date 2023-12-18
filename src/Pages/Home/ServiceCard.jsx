import { Link } from "react-router-dom";
import ServiceDetails from "./ServiceDetails";

const ServiceCard = ({ services }) => {
    const { id, name, image, price, description,detail_description } = services
    // const handleServiceDetails= () =>{

    //     return <ServiceDetails></ServiceDetails>

    // }
    return (
        <div className="card  bg-base-100 shadow-xl">
            <figure><img src={image} alt="Services" className="h-60 w-full"/></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{price}</p>
                <p>{description}</p>
                
                <Link to={`/serviceDetails/${id}`} >
                    <button className="btn btn-primary w-full" 
                    
                    >Show more</button>
                   
                </Link>

            </div>
        </div>
    );
};

export default ServiceCard;