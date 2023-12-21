import { useContext } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import userDefaultPic from '../../../assets/user.png'
import { FaGoogle } from "react-icons/fa";


const Navbar = () => {

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/career'>Career</NavLink></li>

    </>

    const navigate = useNavigate()
    const location = useLocation()

    const { user, logOut,signInWithGoogle } = useContext(AuthContext)
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
        <div>




            <div className="navbar bg-gray-600 text-white ">

                <div className="navbar-start">

                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <div className=" flex justify-center items-center gap-2 ">


                        {
                            user ? <>
                                <p>{user.displayName}</p>
                                <img src={user.photoURL} alt="" className="w-12 rounded-full" />

                            </> : <img src={userDefaultPic} alt="" className="w-12 rounded-full" />
                        }

                    </div>
                    <div className="">
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

            </div>
        </div>
    );
};

export default Navbar;