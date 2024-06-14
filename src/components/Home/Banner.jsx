import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero h-[300px] sm:h-[300px] lg:h-[500px] bg-[url('https://scopeims.com/wp-content/uploads/2019/03/PHOTOFINE-51-compressor.jpg')]">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome</h1>
                    <p className="mb-5">Quick Booking is a event management platform. Where you can easily book events.</p>
                    <Link to="/events" className="btn">Start Booking</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;