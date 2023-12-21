import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";


import { AuthContext } from "../../Provider/AuthProvider";
import Navbar from "../shared/Navbar/Navbar";


const Login = () => {

    const { signIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const [logInError, setLogInError] = useState()

    const handleLogin =async  (e) => {

        e.preventDefault()
        const form = new FormData(e.currentTarget)
        console.log(form)
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)

        setLogInError('')
        
        signIn(email, password)

        .then(result => {
                console.log(result.user)

                navigate(location?.state ? location.state : "/")

            })
        .catch  (error => {
                console.log(error)
                setLogInError("Password is not correct!")
            })
    }
    return (
        <div>

            <Navbar></Navbar>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body " onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <p>New User? Please <Link to='/register' className="text-blue-700 font-bold">Register</Link></p>
                            {
                                logInError && <p className="text-red-700 font-bold text-3xl"> {logInError}</p>
                            }

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;