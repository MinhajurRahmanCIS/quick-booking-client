import { useState, useEffect } from "react";
import DashboardEvents from "../components/Dashboard/DashboardEvents";
import LoadingSpinner from "../components/LoadingSpinner";
import useLoadEvent from "../hooks/useLoadEvent";

const AllDashboardEvents = () => {
    const { events } = useLoadEvent();
    const [allEvent, setAllEvent] = useState([]);

    useEffect(() => {
        setAllEvent(events?.data);
    }, [events?.data]);

    if (!events?.data) {
        return <LoadingSpinner />;
    }

    const handleDeleteProduct = (_id) => {
        setAllEvent(allEvent.filter((event) => event._id !== _id));
    };
    return (
        <div>
            <div>
                <DashboardEvents 
                    events={allEvent}
                    onChangeDelete={handleDeleteProduct}
                />
            </div>
        </div>
    );
};

export default AllDashboardEvents;
