import React from 'react';
import chair from '../../assets/images/chair.png';
import appBannerbg from '../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';
const AppointmentBanner = (props) => {
    const { date, setDate } = props;
    return (
        <div className="hero min-h-screen " style={{ background: `url(${appBannerbg})` }}>
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <img src={chair} alt='Dentis chair' className="w-1/2 mx-auto rounded-lg shadow-2xl" />
                <div className='ml-24'>
                    <DayPicker
                        styles={{
                            caption: { color: 'seagreen' }
                        }}
                        mode="single"
                        date={date}
                        onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;