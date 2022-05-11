import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';

const Info = () => {
    // const cardInfos = [
    //     { cardTitle: 'Opening Hours', bgClass: 'bg-gradient-to-r from-secondary to-primary', img: { clock } },
    //     { cardTitle: 'Visit our location', bgClass: 'bg-accent', img: { marker } },
    //     { cardTitle: 'Contact us now', bgClass: 'bg-gradient-to-r from-secondary to-primary', img: { phone } },
    // ];
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mx-12'>
            <InfoCard cardTitle='Opening Hours' bgClass='bg-gradient-to-r from-secondary to-primary' img={clock}></InfoCard>
            <InfoCard cardTitle='Visit our location' bgClass='bg-accent' img={marker}></InfoCard>
            <InfoCard cardTitle='Contact us now' bgClass='bg-gradient-to-r from-secondary to-primary' img={phone}></InfoCard>
        </div>
    );
};

export default Info;