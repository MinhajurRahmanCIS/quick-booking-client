
import LoadingSpinner from "../LoadingSpinner";
import DashboardEvent from "./DashboardEvent";

const DashboardEvents = ({events, onChangeDelete }) => {
    if (!events) {
        return <LoadingSpinner />;
    }
    return (
        <div>
            <h1 className="text-4xl text-center font-bold mb-5">All Events</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-10">
                {
                    events.map(event => 
                    <DashboardEvent
                    key={event._id}
                    event={event}
                    onChangeDelete ={onChangeDelete }
                    />
                )
                }
            </div>
        </div>
    );
};

export default DashboardEvents;