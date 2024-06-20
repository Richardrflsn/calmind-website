import { useState } from "react"

/* eslint-disable react/prop-types */
const Therapist = (props) => {
	const [isPopupVisible, setPopupVisible] = useState(false)

    const showPopup = () => setPopupVisible(true)
    const hidePopup = () => setPopupVisible(false)

    return(
		<div className="h-screen">
			<div className="flex flex-col items-center w-[400px] p-7 bg-white text-black rounded-lg">
				<img src={props.doctor_url} alt="" className="w-[100%] bg-inherits mb-5" />
				<h2 className="bg-inherit text-[30px] font-semibold">Dr. {props.name}</h2>
				<div className="bg-inherit flex flex-row justify-center gap-1">
					<img src="src\assets\star.svg" alt="" className="bg-inherit w-6" />
					<p className="bg-inherit">{props.rate}/5</p>
				</div>
				<button 
					onClick={showPopup}
					className="w-28 py-1 mt-5 text-[#118AB2] text-center btn-border rounded-3xl hover:bg-[#118AB2] hover:text-white transition-colors duration-300">
					See Details
				</button>
			</div>

			{isPopupVisible && (
                <div className="fixed top-0 left-0 w-full h-full text-black bg-black bg-opacity-65 flex items-center justify-center z-50">
                    <div className="bg-white p-10 rounded-lg w-[40%] h-[85%] relative bg-transparent">
                        <button
                            onClick={hidePopup}
                            className="absolute top-5 right-5 text-gray-500 text-xl font-bold hover:text-gray-700 close-btn">
                            Close
                        </button>
                        <div className="flex flex-col items-center bg-transparent gap-3	">
                            <h2 className="bg-transparent text-2xl font-bold mb-4">Dr. {props.name}</h2>
                            <img src={props.doctor_url} alt={props.name} className="w-[300px] object-cover rounded-lg mb-4" />
                            <p className="bg-transparent text-lg text-center">{props.description}</p>
							<div className="working-hours bg-transparent text-center">
								<h5 className="bg-transparent text-xl text-black font-semibold">Working Hours</h5>
								<p className="bg-transparent text-lg text-black">{props.workingHours}</p>
							</div>
                            <button className='bg-transparent chat-now-btn text-lg'>Chat Now</button>
                        </div>
                    </div>
                </div>
            )}
		</div>
    )
}

export default Therapist