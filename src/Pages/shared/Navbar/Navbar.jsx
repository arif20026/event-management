import { useContext } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import userDefaultPic from '../../../assets/user.png'
import { FaGoogle } from "react-icons/fa";
const Navbar= () => {


    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/career'>Career</NavLink></li>

    </>

    const navigate = useNavigate()
    const location = useLocation()

    const { user, logOut, signInWithGoogle } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => console.log('user logged out successfully'))
            .catch(error => console.log(error))
    }

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result)

                navigate(location?.state ? location.state : "/")

            })
            .catch(error => console.log(error))
    }



    return (
        <div className="navbar bg-gray-600   ">
            <div className="navbar-start">

                <div className="flex ">
                <img src="https://i.ibb.co/rswm63W/Screenshot-302.png" alt="" className="w-10 h-10 rounded-full mr-2" />
                 <h1 className="text-2xl text-white ">Eventpro</h1>
                </div>

                <div className="dropdown">
                    <div tabIndex={0} role="button" className=" btn btn-sm ml-4  lg:hidden  bg-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">

                <div className=" flex justify-center items-center gap-2 text-white  ">


                    {
                        user ? <>
                            <p>{user.displayName}</p>
                            <img src={user.photoURL} alt="" className="w-12 rounded-full mr-1" />

                        </> : <img src={userDefaultPic} alt="" className="w-12 rounded-full" />
                    }

                </div>

                {
                    user ?

                        <Link to='/'> <button className="btn btn-primary w-20" onClick={handleLogOut}>LogOut</button></Link>

                        :
                        <>
                            <Link to='/login'> <button className="btn btn-primary w-20" >Login</button></Link>
                            <button className="btn btn-secondary ml-2   " onClick={handleSignInWithGoogle}>
                                <FaGoogle />
                                Sign in with google
                            </button>

                        </>

                }


            </div>
        </div>
    );
};

export default Navbar;