import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddEvent = () => {
    const navigate = useNavigate();
    const handleAddEvent = async (e) => {
        e.preventDefault();
        const form = e.target;
        const event = form.event.value;
        const name = form.name.value;
        const startingDate = form.startingDate.value;
        const endingDate = form.endingDate.value;
        const photo = form.photo.value;
        const availableTickets = form.availableTickets.value;
        const eventdescription = form.eventdescription.value;
        const eventAddress = form.eventAddress.value;
        const payableTicket = form.payableTicket.value;
        const freeTicket = form.freeTicket.value;
        const price = form.price.value;

        const data = {
            event,
            name,
            startingDate,
            endingDate,
            photo,
            availableTickets : parseInt(availableTickets),
            eventdescription,
            eventAddress,
            payableTicket: parseInt(payableTicket),
            freeTicket : parseInt(freeTicket),
            price : parseInt(price)
        };
        console.log(data)
        await fetch("http://localhost:3000/available_event", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success("Event Added Successfully");
                    form.reset();
                    navigate('/dashboard/all-events');
                }
                else {
                    toast.error("Something went wrong!!");
                }
            })
    };

    return (
        <div>
            <form className="card-body border" onSubmit={handleAddEvent}>
                <h1 className="text-center text-4xl font-bold mb-5">Add Event</h1>
                <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-5 ">

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Event Name</span>
                        </div>
                        <input
                            type="text"
                            name="event"
                            placeholder="Enter Event Name"
                            className="input input-bordered w-full"
                            required
                        />
                    </label>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">ProgramName</span>
                        </div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter Program Name"
                            className="input input-bordered w-full"
                            required
                        />
                    </label>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Starting Date</span>
                        </div>
                        <input
                            type="date"
                            name="startingDate"
                            className="input input-bordered w-full"
                            required
                        />
                    </label>
                    
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Ending Date</span>
                        </div>
                        <input
                            type="date"
                            name="endingDate"
                            className="input input-bordered w-full"
                            required
                        />
                    </label>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Image URL</span>
                        </div>
                        <input
                            type="text"
                            name="photo"
                            placeholder="Enter Image URL"
                            className="input input-bordered w-full"
                            required
                        />
                    </label>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Address</span>
                        </div>
                        <input
                            type="text"
                            name="eventAddress"
                            placeholder="Enter Address"
                            className="input input-bordered w-full"
                            required
                        />
                    </label>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">available Tickets</span>
                        </div>
                        <input
                            type="number"
                            name="availableTickets"
                            placeholder="Enter Available Tickets"
                            className="input input-bordered w-full"
                            required
                        />
                    </label>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Payable Ticket</span>
                        </div>
                        <input
                            type="number"
                            name="payableTicket"
                            placeholder="Enter Available Tickets"
                            className="input input-bordered w-full"
                            required
                        />
                    </label>

                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text">Free Ticket</span>
                        </div>
                        <input
                            type="number"
                            name="freeTicket"
                            placeholder="Enter Available Tickets"
                            className="input input-bordered w-full"
                            required
                        />
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
                        name="eventdescription"
                        className="textarea textarea-bordered textarea-lg w-full"
                        required
                    />
                </label>

                <input className="btn btn-neutral w-full my-5" type="submit" value="Add Event" />
            </form>
        </div>
    );
};

export default AddEvent;
