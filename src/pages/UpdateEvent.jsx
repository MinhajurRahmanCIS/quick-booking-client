import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import useLoadEvent from "../hooks/useLoadEvent";
import LoadingSpinner from "../components/LoadingSpinner";

const UpdateEvent = () => {
    const { id } = useParams();
    const { event } = useLoadEvent(id);
    const navigate = useNavigate();

    const handleUpdateEvent = async (event) => {
        event.preventDefault();
        const form = event.target;
        const id = form.id.value;
        const name = form.name.value;
        const description = form.description.value;
        const image = form.image.value;
        const time = form.time.value;
        const date = form.date.value;
        const address = form.address.value;
        const price = form.price.value;
        const pricing_type = form.pricing_type.value;

        const data = {
            id,
            name,
            description,
            image,
            time,
            date,
            address,
            price,
            pricing_type
        };

        await fetch(`http://localhost:3000/events/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success("Event Updated Successfully");
                    form.reset();
                    navigate('/dashboard/all-events');
                } else {
                    toast.error("Something went wrong!!");
                }
            });
    };

    if (!event) {
        return <LoadingSpinner />;
    }
    const { name, description, image, time, date, address, pricing_type, price } = event;

    return (
        <div>
            <form className="card-body border" onSubmit={handleUpdateEvent}>
                <h1 className="text-center text-4xl font-bold mb-5">Update Event</h1>
                <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-5 ">
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Id</span>
                        </div>
                        <input
                            type="number"
                            name="id"
                            placeholder="Enter Event Id"
                            defaultValue={id}
                            className="input input-bordered w-full"
                            required
                            readOnly
                        />
                    </label>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Event Name</span>
                        </div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter Event Name"
                            className="input input-bordered w-full"
                            defaultValue={name}
                            required
                        />
                    </label>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Image URL</span>
                        </div>
                        <input
                            type="text"
                            name="image"
                            placeholder="Enter Image URL"
                            className="input input-bordered w-full"
                            defaultValue={image}
                            required
                        />
                    </label>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Time</span>
                        </div>
                        <input
                            type="time"
                            name="time"
                            className="input input-bordered w-full"
                            defaultValue={time}
                            required
                        />
                    </label>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Date</span>
                        </div>
                        <input
                            type="date"
                            name="date"
                            className="input input-bordered w-full"
                            defaultValue={date}
                            required
                        />
                    </label>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Address</span>
                        </div>
                        <input
                            type="text"
                            name="address"
                            placeholder="Enter Address"
                            className="input input-bordered w-full"
                            defaultValue={address}
                            required
                        />
                    </label>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Pricing Type</span>
                        </div>
                        <select
                            name="pricing_type"
                            className="select select-bordered w-full"
                            required
                        >
                            <option value="free" selected={pricing_type === "free"}>Free</option>
                            <option value="paid" selected={pricing_type === "paid"}>Paid</option>
                        </select>
                    </label>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Price</span>
                        </div>
                        <input
                            type="number"
                            name="price"
                            placeholder="Enter Price"
                            className="input input-bordered w-full"
                            defaultValue={price}
                            required
                        />
                    </label>
                </div>

                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Description</span>
                    </div>
                    <textarea
                        placeholder="Description"
                        name="description"
                        className="textarea textarea-bordered textarea-lg w-full"
                        defaultValue={description}
                        required
                    />
                </label>

                <input className="btn btn-neutral w-full my-5" type="submit" value="Update Event" />
            </form>
        </div>
    );
};

export default UpdateEvent;
