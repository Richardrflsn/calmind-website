import MainSection from "../components/MainSection"
import Testimonials from "../components/Testimonials";
import TherapistList from "../components/TherapistList";
import { useRef } from "react";

const TalkTherapy = () => {
    const therapistListRef = useRef(null);

    const scrollToTherapistList = () => {
        if (therapistListRef.current) {
        therapistListRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return(
        <div className="talk-therapy text-white">

            {/* Section 1 */}
            <div className="h-screen flex flex-row justify-between pt-5">
                <div className="pl-20 flex flex-col justify-center">
                    <h1 className="w-[75%] text-[35px] pb-5 font-semibold">Taking care of your mental health is our Priority</h1>
                    <p className="pb-10 w-[50%] text-[25px] text-gray-300">Doctors, therapy -- all in one service 24/7 availability...</p>
                    <button onClick={scrollToTherapistList} className="btn see-details-btn ">See Details</button>
                </div>
                <div className="">
                    <img src="src\assets\talk-therapy-img1.png" alt="" className="w-[800px]  "/>
                </div>
            </div>
            {/* Section 2 */}
            <MainSection scrollToTherapistList={scrollToTherapistList} />

            {/* Section 3 */}
            <div ref={therapistListRef}>
                <TherapistList />
            </div>

            { /* Section 4 */}
            <div className='px-10'>
                <h2 className='text-[35px] font-semibold'>Our Special Patients Say</h2>
                <Testimonials />
            </div>
        </div>
    )
}

export default TalkTherapy