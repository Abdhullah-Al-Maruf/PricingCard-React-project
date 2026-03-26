import React, { use } from 'react';
import Pricecard from '../Card/Pricecard';


const Pricesection = ({dataPromise}) => {
    const  priceData=use(dataPromise);
    const plans=priceData.pricingPlans;


    return (
        <div className='grid gap-5   md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto mt-7 '>
           {
            plans.map(plan=> <Pricecard key={plan.id} plan={plan}></Pricecard>)
           } 
        </div>
    )
};

export default Pricesection;