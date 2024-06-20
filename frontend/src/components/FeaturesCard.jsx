import { NavLink } from "react-router-dom"

const FeatureCard = () => {
    return(
        <>
        <div className="flex flex-row gap-[40px] bg-inherit text-white">
            <div className="flex flex-col justify-center items-center w-[360px] h-[430px] gap-3 bg-[#118AB2] rounded-lg">
                <h2 className="text-[35px] font-bold bg-inherit">Motivation</h2>
                <p className="text-[25px] w-[273px] text-center bg-inherit">Express your feelings and get feedback in the form of relevant words of encouragement and inspirational tweets.</p>
                <NavLink to='/motivation'>
                    <button className="text-[25px] bg-[#09af59] px-3 py-1 feature-card-btn">
                        <span className="bg-inherit">Try Now!</span>
                    </button>
                </NavLink>
            </div>
            <div className="flex flex-col justify-center items-center w-[360px] h-[430px] gap-3 card-gradient rounded-lg">
                <h2 className="text-[35px] font-bold bg-inherit">Talk Mind</h2>
                <p className="text-[25px] w-[273px] text-center bg-inherit">Interact with the community via tweets to share experiences and get support.</p>
                <NavLink to='/talk-mind'>
                    <button className="text-[25px] bg-[#09af59] px-3 py-1 feature-card-btn">
                        <span className="bg-inherit">Try Now!</span>
                    </button>
                </NavLink>
            </div>
            <div className="flex flex-col justify-center items-center w-[360px] h-[430px] gap-3 bg-[#118AB2] p-6 rounded-lg">
                <h2 className="text-[35px] font-bold text-white bg-inherit">Talk Therapy</h2>
                <p className="text-[25px] w-[273px] text-center text-white bg-inherit">
                    Interact directly with a professional therapist for therapy sessions that support your mental health.
                </p>
                <NavLink to="/talk-therapy">
                    <button className="text-[25px] bg-[#09af59] px-3 py-1 feature-card-btn">
                        <span className="bg-inherit">Try Now!</span>
                    </button>
                </NavLink>
            </div>
        </div>
        </>
    )
}

export default FeatureCard