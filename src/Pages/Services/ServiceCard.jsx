import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServiceCard = ({service}) => {
    const {image_url, price, _id, name,description, rating} = service ; 
    const  decriptions = description
    return (
        <div className="card card-compact border-blue-500 w-96 bg-base-100 shadow-xl">
      <figure>
        {/* <img className='w-full h-56' src={image_url} alt="Shoes" /> */}
        <PhotoProvider>
      <PhotoView className='w-full' src={image_url}>
        <img  src={image_url} alt="" />
      </PhotoView>
    </PhotoProvider>
      </figure>
      <div className="card-body">
        <div className='flex ' > 
        <h2 className="card-title">{name}</h2>
        <p className='text-semibold text-blue-400'>({rating})</p>
        </div>
        <p className="text-2xl text-orange-600 font-semibold">
          Price: ${price}
        </p>
        <p>
            {decriptions}...
        </p>
        <div className="card-actions justify-end">
          <Link to={`/services/${_id}`}>
            <button className="btn btn-primary">See more</button>
          </Link>
        </div>
      </div>
    </div>
    );
};

export default ServiceCard;