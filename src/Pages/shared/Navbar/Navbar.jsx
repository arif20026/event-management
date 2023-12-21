import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import userDefaultPic from '../../../assets/user.png'

const Navbar = () => {

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/career'>Career</NavLink></li>

    </>

    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => console.log('user logged out successfully'))
            .catch(error => console.log(error))
    }
    return (
        <div>




            <div className="navbar bg-red-500   ">

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
                                <Link to='/login'> <button className="btn btn-primary w-20" >Login</button></Link>

                        }

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;