import React from 'react';

const infoCard = ({ cardInfo }) => {
    const { bgClass, cardTitle, img } = cardInfo;

    return (
        <div className={`card lg:card-side ${bgClass} shadow-xl hover:shadow-2xl my-0  p-5`}>
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title ">{cardTitle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default infoCard;