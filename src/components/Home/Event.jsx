import { MdAccessTime } from "react-icons/md";
import { Link } from "react-router-dom";

const Event = ({ event }) => {
    const { _id, event: title, name, startingDate, endingDate, photo, availableTickets, createdAtBy, eventdescription, eventAddress, payableTicket, freeTicket, price } = event;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className="h-[250px] w-full" src={photo} alt={"pic of " + title} /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p><strong>Event : </strong>{name}</p>
                <p>{eventdescription.slice(0, 200)}</p>
                <p className="flex items-center gap-1 text-md">
                    <span>
                        <MdAccessTime />
                    </span>
                    <strong>Starting Date : </strong>
                    {startingDate}
                </p>
                <p className="flex items-center gap-1 text-md">
                    <span>
                        <MdAccessTime />
                    </span>
                    <strong>Ending Date : </strong>
                    {endingDate}
                </p>
                <p><strong>Price : $</strong> {price}</p>

                <div className="card-actions justify-end">
                    <Link to={`/details/${_id}`} className="btn btn-neutral">Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Event;