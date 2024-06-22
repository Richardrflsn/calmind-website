import {NavLink} from 'react-router-dom'


import MotivationQuoteGenerator from "../components/MotivationQuoteGenerator"

const Motivation = () => {
    return (
        <div className="motivation mt-8 w-screen">
            <h3 className="text-white text-[35px]">Tell me what you are feeling right now</h3>
            <img src="src\assets\emojis.png" alt="emojis" className="h-auto w-[323px] my-3"/>
            
            <MotivationQuoteGenerator />
            <div className="flex flex-row justify-center items-center gap-20">
                <div className="flex flex-col justify-center items-center gap-5">
                    <h2 className="text-white text-center w-[458px] text-[35px]">Tweets that are relevant to how you feel right now</h2>
                    <NavLink to='/'>
                        <button className='see-details-btn btn w-[125px] h-[40px] '>Try Me!</button>
                    </NavLink>
                </div>
                <img src="src\assets\motivation-img1.png" alt="" className="w-[600px] h-[auto]"/>
            </div>
        </div>
        
    )
}

export default Motivation