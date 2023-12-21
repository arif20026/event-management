    import { useContext, useState } from "react";
    import { Link } from "react-router-dom";
    import { AuthContext } from "../../Provider/AuthProvider";

    const Register = () => {

        const {createUser} =useContext(AuthContext)
        const [registerError,setRegisterError] = useState('')
        const [success,setSuccess] = useState(false)
        


        const handleSubmit = e => {
            e.preventDefault();
            console.log(e.currentTarget);
            const form = new FormData(e.currentTarget)
            console.log(form)
            const name= form.get('name')
            const photoURL =  form.get('photoURL')
            const email= form.get('email')
            const password =form.get('password')

            setRegisterError('')
            setSuccess('')

            if( !/^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(.{6,})$/.test(password)){
                setRegisterError('Password should be at least 6 characters and  contain a capital letter and a special character ! ')
                return
            }



            createUser(email,password,name,photoURL)
            .then (result => {
                console.log(result.user)
                setSuccess(true)
            })
            .catch(error => {
                console.log(error)
                setRegisterError(error.message)
            })


        }
        return (
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Photo URL" name="photoURL" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password"className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary" >Register</button>
                            </div>
                            <p>Already have an account Please <Link to='/login' className="text-blue-700 font-bold">Login</Link></p>
                            {
                                registerError && <p className="text-red-500  font-bold text-3xl"> {registerError}</p>
                            }

                            {
                                success && <p className="text-green-800 font-bold text-3xl">Congratulation! User Created</p>
                            }
                        </form>
                    </div>
                </div>
            </div>
        );
    };

    export default Register;