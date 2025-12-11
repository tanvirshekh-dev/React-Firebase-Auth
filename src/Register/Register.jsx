// import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Contexts/AuthContext/AuthContext";
// import { auth } from "../Firebase/firebase.init";

const Register = () => {
  const { createUser } = use(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    createUser(email, password)
      .then(result => {
      console.log(result.user);
    })
      .catch(error => {
      console.log(error);
    })
  }

    // const handleRegister = (event) => {
    //     event.preventDefault();
    //     const email = event.target.email.value;
    //     const password = event.target.password.value;
    //     console.log(email, password);

    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then(result => {
    //             console.log(result);
    //         })
    //         .catch(error => {
    //         console.log(error);
    //     })
    // }

  return (
    <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-4xl font-bold">Please Register!</h1>
              <form onSubmit={handleRegister}>
                  <fieldset className="fieldset">
                      {/* name */}
          <label className="label">Name</label>
                      <input type="text" className="input" name="name" placeholder="Name" />{/* Email */}
          <label className="label">Email</label>
                      <input type="email" name="email" className="input" placeholder="Email" />
                      {/* Email */}
          <label className="label">Password</label>
          <input type="password" name="password" className="input" placeholder="Password" />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
        </form>
              <p>Already have an account please! <Link className={"text-blue-500 hover:text-blue-600"} to={"/login"}>Login</Link></p>
      </div>
    </div>
  );
};

export default Register;
