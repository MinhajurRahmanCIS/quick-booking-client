import Banner from "../components/Home/Banner";
import Events from "../components/Home/Events";
import useLoadEvent from "../hooks/useLoadEvent";

const Home = () => {
    const { events } = useLoadEvent();
    return (
        <div>
            <Banner />
            <Events events={events?.data} />
        </div>
    );
};

export default Home;