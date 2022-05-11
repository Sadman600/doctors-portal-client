import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
    const cardInfos = [
        { _id: 11, cardTitle: 'Opening Hours', bgClass: 'bg-gradient-to-r from-secondary to-primary', img: clock },
        { _id: 22, cardTitle: 'Visit our location', bgClass: 'bg-accent', img: marker },
        { _id: 33, cardTitle: 'Contact us now', bgClass: 'bg-gradient-to-r from-secondary to-primary', img: phone },
    ];
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {
                cardInfos.map(cardInfo => <InfoCard key={cardInfo._id} cardInfo={cardInfo}></InfoCard>)
            }
            {/* <InfoCard cardTitle='Opening Hours' bgclass='bg-gradient-to-r from-secondary to-primary' img={clock}></InfoCard>
            <InfoCard cardTitle='Visit our location' bgclass='bg-accent' img={marker}></InfoCard>
            <InfoCard cardTitle='Contact us now' bgclass='bg-gradient-to-r from-secondary to-primary' img={phone}></InfoCard> */}
        </div>
    );
};

export default Info;