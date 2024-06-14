import toast from "react-hot-toast";
import { CgDollar } from "react-icons/cg";
import { CiMenuKebab } from "react-icons/ci";
import { FaRegEdit } from "react-icons/fa";
import { MdAccessTime, MdOutlineDateRange } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const DashboardEvent = ({ event, onChangeDelete }) => {
  const navigate = useNavigate();
  const { _id, event: title, name, startingDate, endingDate, photo, availableTickets, createdAtBy, eventdescription, eventAddress, payableTicket, freeTicket, price } = event;

  const handelDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this Event!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        await fetch(`http://localhost:3000/delete_event/${id}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-type": "application/json"
          },
        })
          .then(res => res.json())
          .then(data => {
            if (data.data.deletedCount > 0) {
              toast.success("Event Removed");
              onChangeDelete(id);
              Swal.fire({
                title: "Deleted!",
                text: "Your Event has been deleted.",
                icon: "success"
              });
            }
            else {
              toast.error("Something went wrong!!");
              navigate('/')
            }
          })
      }
    });
  };
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className="h-[300px] w-full" src={photo} alt={"pic of " + name} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{eventdescription.slice(0, 200)}</p>
                <p><strong>Created By : </strong>{createdAtBy}</p>
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
                    <div className="dropdown dropdown-bottom dropdown-end">
                        <div tabIndex={0} role="button" className="btn m-1"><CiMenuKebab /></div>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box border items-center">
                            {/* <li><Link to={`/dashboard/updateEvent/${_id}`}><FaRegEdit />Update</Link></li> */}
                            <li><button onClick={() => handelDelete(_id)}><RiDeleteBin5Line />Remove</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardEvent;