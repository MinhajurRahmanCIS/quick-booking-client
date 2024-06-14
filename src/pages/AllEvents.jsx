import Event from "../components/Home/Event";
import LoadingSpinner from "../components/LoadingSpinner";
import useLoadEvent from "../hooks/useLoadEvent";

const AllEvents = () => {
    const {events} = useLoadEvent();
    if(!events){
        return <LoadingSpinner/>
    }
    return (
        <div className="my-5">
            <h1 className="text-4xl text-center font-bold mb-2">All Events</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10 p-10">
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

export default AllEvents;