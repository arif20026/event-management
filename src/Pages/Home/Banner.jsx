
const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/3dz4y22/Screenshot-302.png)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Welcome!</h1>
                    <p className="mb-5 text-2xl">Empowering Education, Elevating Events: <span className="font-bold">Event Pro</span> – Your Gateway to Seamless Educational Event Management</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;