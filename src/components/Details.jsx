import { Link, useParams } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import { MdAccessTime } from "react-icons/md";
import useLoadEvent from "../hooks/useLoadEvent";

const Details = () => {
    const { id } = useParams();
    const { event } = useLoadEvent(id);
    if (!event?.data) {
        return <LoadingSpinner />
    }
    const { _id, event: title, name, startingDate, endingDate, photo, availableTickets, eventdescription, eventAddress, payableTicket, freeTicket, price } = event?.data;

    const handelBooking = () => {

    };
    return (
        <div className="p-10">
            <div className="card card-side bg-base-100 shadow-xl rounded-none border">
                <figure className="rounded-none w-1/2"><img src={photo} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <span><strong>Program : </strong> {name}</span>
                    <span><strong>Event Venue : </strong> {eventAddress}</span>
                    <span><strong>Description : </strong>{eventdescription}</span>
                    <span><strong>Total Available Tickets : </strong>{availableTickets}</span>
                    <span className="flex items-center gap-1 text-md">
                        <strong>Starting Date : </strong>
                        <span><MdAccessTime /></span>
                        {startingDate}
                    </span>
                    <span className="flex items-center gap-1 text-md">
                        <strong>Ending Date : </strong>
                        <span><MdAccessTime /> </span>
                        {endingDate}
                    </span>
                    <span><strong>Payable Ticket : </strong>{payableTicket}</span>
                    <span><strong>Free Ticket : </strong>{freeTicket}</span>
                    <span><strong>Price : $</strong>{price}</span>
                    <div className="card-actions justify-end">
                        <button onClick={handelBooking} className="btn btn-neutral">Book</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Details;