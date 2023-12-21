import { useEffect, useState } from "react";

const Features = () => {
    const [features, setFeatures] = useState([])
    
    useEffect(() => {
        fetch('features.json')
            .then(res => res.json())
            .then(data => setFeatures(data))
    },[])
    return (

       <div>
         <h3 className="text-center font-bold text-4xl mb-6">Features</h3>
        <div className="card      grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 ">

                    
            {
                features.map (feature => <div key={feature.id} className=" space-y-2 bg-base-100  border  rounded-lg ">
                    <img src={feature.image} alt="" className="w-full h-60 rounded-lg"/>
                   <h3 className="font-bold">{feature.name}</h3> 
                   <p className="pb-2">{feature.description}</p>
                </div>)
            }
            

              

            
        </div>
       </div>
    );
};

export default Features;