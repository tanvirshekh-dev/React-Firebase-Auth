import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-4xl font-bold">Please Register!</h1>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p>
          New to pleaser register!{" "}
          <Link
            className={"text-blue-500 hover:text-blue-600"}
            to={"/register"}
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
