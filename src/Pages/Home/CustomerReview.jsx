import 'aos/dist/aos.css'
import AOS from 'aos';
import { useEffect, useState } from 'react';
AOS.init();
const CustomerReview = () => {
    const [reviews,setReviews] =useState([])
    useEffect(() => {
        fetch('reviews.json')
        .then(res =>res.json())
        .then(data=> setReviews(data)  )
    },[])
    return (
        <div className="flex flex-col  items-center gap-10 mx-20 my-10">

            <h3 className='text-3xl font-bold '>What customers say about us</h3>

           {
            reviews.map(review =>  
            <div   data-aos={review.data_aos } key={review.id} className={"rounded-lg w-full h-44 flex flex-col justify-left items-left px-4 "} style={{ backgroundColor: `${review.color}` }} >
            <p>{review.comment}</p>
            <br />

            <p className='font-thin'>-{review.customerName}</p>
        </div>)
           }

        </div>
    );
};

export default CustomerReview;