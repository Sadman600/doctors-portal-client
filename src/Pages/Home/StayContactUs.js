import React from 'react';
import contactBg from '../../assets/images/appointment.png';
const StayContactUs = () => {
    return (
        <section className="hero min-h-full my-10 " style={{ backgroundImage: `url(${contactBg})` }}>
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className=" text-secondary text-xl font-bold">Contact Us</h1>
                    <p className="py-6 text-3xl text-white">Stay connected with us </p>
                    <form>
                        <input type="text" placeholder="Email address" className="my-2 input input-bordered input-accent w-full max-w-xs" />
                        <input type="text" placeholder="Subject" className="my-2 input input-bordered input-accent w-full max-w-xs" /> <br />
                        <textarea className="textarea textarea-bordered h-24 w-full max-w-xs" placeholder="Message"></textarea><br />
                        <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Submit</button>
                    </form>

                </div>
            </div>
        </section>
    );
};

export default StayContactUs;