import { useEffect, useState } from 'react';

const useLoadEvent = (id) => {
    const [event, setEvent] = useState({});
    const [events, setEvents] = useState([]);
    useEffect(() => {
        if (id) {
            fetch(`http://localhost:3000/specific_event/${id}`, {
                headers:{
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
                .then(res => res.json())
                .then(data => setEvent(data))
        } else {
            fetch("http://localhost:3000/all_event", {
                headers:{
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
                .then(res => res.json())
                .then(data => setEvents(data))
                .catch(error => console.error('Error fetching events:', error));
        }
    }, [id]);

    if (id) {
        return { event };
    } else {
        return { events };
    }
};

export default useLoadEvent;
