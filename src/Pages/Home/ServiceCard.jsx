import { Link } from "react-router-dom";

const ServiceCard = ({ services }) => {
    const { id, name, image, price, description} = services
   
    return (
        <div className="card  bg-base-100 shadow-xl ">
            <figure><img src={image} alt="Services" className="h-60 w-full"/></figure>
            <div className="card-body">
                <h2 className="card-title font-bold" >{name}</h2>
                <p className="font-bold">Cost: $ {price}</p>
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