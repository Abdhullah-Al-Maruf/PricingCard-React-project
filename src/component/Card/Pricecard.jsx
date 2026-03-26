import { BicepsFlexed,  Check,  Rocket, User } from 'lucide-react';
import React from 'react';

const Pricecard = ({plan}) => {
    const { icon, name ,price,currency,duration,description,badge,features,buttonText,popular}=plan;

    const iconMap={
        bicep:<BicepsFlexed color='white'/>,
        rocket:<Rocket color='white'/>,
        user:<User color='white'/>
    }

    const badgeMap={
        Free:<div className="badge badge-primary btn btn-success   shadow-blue-500 shadow-md px-14 ">{badge}</div>,
        MostPopular:<div className="badge badge-info text-white font-bold px-9 btn btn-success  shadow-sky-500 shadow-md">{badge}</div>,
        BestValue:<div className="badge badge-secondary  px-9  btn btn-success shadow-pink-500 shadow-md">{badge}</div>


    }
    return (
        <div>
          <div  className='  rounded-xl shadow-xl  p-4 relative bg-[#00003F] text-gray-500'>
            <div className='mb-3 font-bold '>
            {badgeMap[badge]}
            </div>
            <div className=' bg-linear-to-r 
                 from-purple-400 
                 via-pink-400 
                 to-amber-400 
                 bg-clip-text 
                 text-transparent space-y-4' >
        <p className='btn btn-success shadow-green-800 shadow mt-3'>{iconMap[icon]}</p>
            <h2 className='text-3xl  text-white'> {name}</h2>
            <h1 className='text-3xl text-amber-50'>{price} {currency} per {duration}</h1>
            <p>{description}</p>
            { features.map((feature,index)=> <p key={index} className='flex gap-2'><Check color='green'></Check> {feature}</p>)}
            {
                popular && <p className="badge badge-warning absolute top-3 right-2 text-white
                 font-bold p-5
                 btn btn-success shadow-orange-500 shadow-md
                 ">Hot Deal</p>
            }
            </div>
           <div className='flex flex-col  justify-items-center mt-3'>
            <button className=' btn  btn-secondary btn-outline'>{buttonText}</button>
           </div>
            </div>  
        </div>
    );
};

export default Pricecard;