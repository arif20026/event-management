import Navbar from "../shared/Navbar/Navbar";

const Career = () => {
    return (
        <div>
            <Navbar></Navbar>

            <section className="m-4 space-y-4">
                <h1 className="text-2xl">Join Our Team at Event Pro</h1>

                <article>
                    <h2 className="text-2xl text-blue-500">Why Work at Event Pro?</h2>
                    <ul>
                        <li><strong>Exciting Challenges:</strong> Join a team that thrives on tackling exciting challenges.</li>
                        <li><strong>Innovative Environment:</strong> Be part of an innovative and forward-thinking environment.</li>
                        <li><strong>Collaborative Culture:</strong> Collaboration is at the heart of our culture.</li>
                        <li><strong>Growth Opportunities:</strong> We believe in nurturing talent and providing growth opportunities.</li>
                    </ul>
                </article>

                <article>
                    <h2 className="text-2xl text-blue-500">Current Openings</h2>
                    <ul className="space-y-4">
                        <li><strong>Event Coordinator:</strong> Play a pivotal role in planning and executing educational events. <button className="btn btn-sm bg-blue-500">Apply now</button></li>
                        <li><strong>Marketing Specialist:</strong> Contribute to the promotion of educational events.<button className="btn btn-sm bg-blue-500">Apply now</button></li>
                        <li><strong>Technology Enthusiast:</strong> Join our tech team and implement cutting-edge solutions.<button className="btn btn-sm bg-blue-500">Apply now</button></li>
                    </ul>
                </article>


                <article>
                    <h2 className="text-2xl text-blue-500">Internship Programs</h2>
                    <p>Explore our internship programs designed to provide students and recent graduates with valuable insights into the world of educational events.</p>
                </article>

                <article>
                    <h2 className="text-2xl text-blue-500">Join Event Pro in Shaping the Future of Educational Events</h2>
                    <p>If you are ready to contribute to our mission and be part of a dynamic team, we invite you to explore career opportunities with us. Grow with us. Innovate with us. Create with us. Join Event Pro!</p>
                    <p>For inquiries and applications, contact us at <a href="mailto:careers@eventpro.com" className="font-bold text-blue-500">careers@eventpro.com</a>.</p>
                </article>
            </section>

        </div>
    );
};

export default Career;