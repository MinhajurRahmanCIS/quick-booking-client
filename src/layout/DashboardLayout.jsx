import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className="flex-none lg:hidden">
                    <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                    </label>
                </div>
                <section className="p-10 mt-5">
                    <Outlet />
                </section>
            </div>
            <div className="drawer-side lg:drawer-open">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 gap-0.5">
                    <li><Link to="/dashboard" >Dashboard</Link></li>
                    <li><Link to="/dashboard/all-events" >All Events</Link></li>
                    <li><Link to="/dashboard/add-event" >Add Event</Link></li>
                    <li><Link to="/" >Home</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardLayout;