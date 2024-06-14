import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";
import GoogleLogin from "../components/login-signUp/GoogleLogin";
import sImage from "../assets/singUp.png";
import toast from "react-hot-toast";
const Signup = () => {
  const [passMatch, setPassMatch] = useState(true);
  const { user, createUser, updateUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const form = location?.state?.form?.pathname || "/";

  const handelRegistration = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    const confirm_password = form.confirm_password.value;

    if (password !== confirm_password) {
      setPassMatch(false);
    }
    if (password === confirm_password) {
      createUser(email, password)
      .then((data) => {
        if (data?.user?.email) {
          const userInfo = {
            email: data?.user?.email,
            name: name,
            AccountcreateAt: data?.user?.metadata?.creationTime,
          };
          fetch("http://localhost:3000/user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data) {
                localStorage.setItem("token", data?.token);
                navigate("/");
                toast.success("Account Create Successfully");
              }
            })
            .catch((error) => {
              toast.error(error?.message);
            });
        }
      });
    }
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div>
          <img src={sImage} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handelRegistration} className="card-body">
            <h1 className="text-4xl text-center font-bold">Registration</h1>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="input input-bordered"
                name="name"
                required />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="input input-bordered"
                name="email"
                required />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter Your Password"
                className="input input-bordered"
                name="password"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Please Confirm Password"
                className="input input-bordered"
                name="confirm_password"
                required
              />
            </div>

            {!passMatch && (
              <div className="my-2">
                <p className="text-red-500">Passwords do not match!</p>
              </div>
            )}

            <div className="form-control mt-6">
              <button className="btn btn-primary">Registration</button>
            </div>
            <GoogleLogin form={form} />
            <p className="text-center">Haven't Account! <Link className="link link-hover" to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;