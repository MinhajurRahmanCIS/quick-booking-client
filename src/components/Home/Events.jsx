import LoadingSpinner from "../LoadingSpinner";
import Event from "./Event";

const Events = ({events}) => {
    if (!events) {
        return <LoadingSpinner />
    }
    return (
        <div className="my-5 p-10">
            <h1 className="text-4xl text-center font-bold mb-8">Ongoing Events</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10">
                {
                    events.map(event => 
                    <Event
                    key={event._id}
                    event={event}
                    />
                )
                }
            </div>
        </div>
    );
};

export default Events;