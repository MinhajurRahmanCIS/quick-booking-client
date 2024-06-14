import { useParams } from "react-router-dom";
import useLoadEvent from "../hooks/useLoadEvent";
import LoadingSpinner from "../components/LoadingSpinner";
import toast from "react-hot-toast";

const Booking = () => {
    const { id } = useParams();
    const { event } = useLoadEvent(id);

    if (!event?.data) {
        return <LoadingSpinner />;
    }

    const handleBooking = async (e) => {
        e.preventDefault();
        const form = e.target;

        const booking = {
        };
        console.log(booking);
        fetch("http://localhost:3000/booking", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                toast.success("Booking Success");
                form.reset();
            });
    };

    return (
        <div className="p-10">
            <h1 className="text-5xl font-bold mb-10 text-center">{event.name}</h1>
            <form className="card-body border" onSubmit={handleBooking}>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email"
                            placeholder="Email"
                            className="input input-bordered"
                            required
                            name="email" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text"
                            placeholder="Enter Your Name"
                            className="input input-bordered"
                            required
                            name="name" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Mobile</span>
                        </label>
                        <input type="text"
                            placeholder="Enter Your Mobile Number"
                            className="input input-bordered"
                            required
                            name="mobile" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input type="text"
                            placeholder="Enter Your Address"
                            className="input input-bordered"
                            required
                            name="address" />
                    </div>
                </div>
                <input className="btn btn-neutral w-full text-3xl mt-5" type="submit" value="Book" />
            </form>
        </div>
    );
};

export default Booking;
