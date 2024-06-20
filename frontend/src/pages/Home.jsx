import { NavLink } from 'react-router-dom';
import { useRef } from 'react';
import FeatureCard from '../components/FeaturesCard';
import Form from '../components/Form';

const Home = () => {
	const aboutUsRef = useRef(null)
    const featuresRef = useRef(null)
    const getInTouchRef = useRef(null)

    const scrollToSection = (sectionRef) => {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }

	return (
		<>
			{/* Bagian 1 */}
			<div className="min-h-screen bg-[#118AB2] flex flex-col justify-center overflow-hidden">
				<div className="container h-full bg-[#118AB2] flex flex-row items-center justify-between relative pl-14">
					<div className="flex flex-col items-start gap-10 text-white w-[455px] bg-[#118AB2] z-10">
						<h1 className='bg-inherit absolute top-[-120px] text-5xl font-bold'>CALMIND</h1>
						<h2 className="text-[55px] font-bold mb-4 bg-[#118AB2]">Embark on Your Mental Health Journey</h2>
						<NavLink to="/talk-mind">
							<button className="w-[170px] text-[25px] py-2 start-here">
								START HERE
							</button>
						</NavLink>
					</div>
					<div className="absolute top-[-280px] right-[-200px] mt-8 bg-transparent">
						<img 
							src="src/assets/home-image1.png" 
							alt="Home" 
							className="w-[745px] h-auto bg-transparent"
						/>
					</div>
				</div>
			</div>
			{/* About Us */}
			<div className="min-h-screen bg-white text-white flex flex-col justify-start items-center overflow-hidden">
				<h2 className='bg-inherit text-[#118AB2] font-bold text-[50px] py-16' ref={aboutUsRef}>About Us</h2>
				<div className='flex flex-row justify-between gap-5 w-full max-w-screen-xl bg-inherit'>
					<div className='flex flex-col gap-4 w-[488px] ml-28 mt-7 bg-transparent text-black'>
						<h3 className='bg-inherit text-[35px] font-bold'>CALMIND</h3>
						<p className='bg-inherit text-[25px]'>Greetings from CALMIND, your go-to resource for mental health. We are committed to offering a welcoming, helpful online environment where you can improve your mental health via expert therapy, motivational feedback, and community interaction.</p>
					</div>
					<div className='relative bg-inherit'>
						<img src="src/assets/home-image2.png" alt="" className='max-w-none w-[750px] h-auto bg-inherit'/>
					</div>
				</div>
			</div>			
			{/* Features */}
			<div className="h-[670px] bg-[#DBEDF3] flex flex-col items-center justify-start p-16 overflow-hidden">
				<h2 className='text-[#118AB2] bg-inherit text-[50px] font-bold' ref={featuresRef}>Features</h2>
				<FeatureCard />
			</div>
			<div className="h-screen text-white">
            <div className="h-[60%] w-[100%] flex flex-row gradient-bg">
                <div className="w-[55%] h-[100%] pl-36 bg-transparent flex flex-col items-start justify-center">
                    <h1 className="text-[50px] font-bold bg-transparent mb-5" ref={getInTouchRef}>Get in Touch</h1>
                    <p className="bg-transparent w-[70%] text-lg">We&apos;d love to hear from you! Whether you have questions about our features, need assistance with your account, or want to provide feedback, our team is here to help. At CALMIND, we value your input and are committed to providing the best possible support.</p>
                    <div className="social-media flex flex-row bg-transparent gap-8 mt-10">
                        <a href='https://instagram.com' className="p-2 social-media-border bg-transparent">
                            <img src="src\assets\instagram.svg" alt="" className="bg-transparent w-8 h-8" />
                        </a>
                        <a href='https://tiktok.com' className="p-2 social-media-border bg-transparent">
                            <img src="src\assets\tiktok.svg" alt="" className="bg-transparent w-8 h-8"/>
                        </a>
                    </div>
                </div>
                <div className="relative w-[45%] h-[100%] bg-transparent">
                    <div className="absolute w-[100%] h-[100%] left-[-50px] bottom-[-80px] bg-transparent">
                        <Form />
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="footer bg-white h-[40%] text-black flex justify-center items-end pb-5">
                <div className="bg-inherit flex flex-row justify-between items-center px-10 gap-10 border-bottom">
                    <div className="title bg-transparent">
                        <h3 className='bg-transparent w-[30%] text-[25px] font-bold'>CALMIND</h3>
                        <p className='bg-transparent w-[75%] text-[17px] font-semibold'>Embark on Your Mental Health Journey</p>
                    </div>
                    <div className="contact bg-transparent">
                        <p className='bg-transparent font-semibold text-[20px]'>Contact Us:</p>
                        <ul className='bg-transparent pl-5 w-[75%]'>
                            <li className='bg-transparent'>Email: support@calmind.com</li>
                            <li className='bg-transparent'>Phone: +1-800-123-4567</li>
                            <li className='bg-transparent'>Address: 123 Wellness Way, Suite 456, Mind City, MC 78901</li>
                        </ul>
                    </div>
                    <div className="flex flex-col bg-transparent gap-4 mb-5">
                        <button className='bg-transparent footer-btn' onClick={() => scrollToSection(aboutUsRef)}>ABOUT US</button>
                        <button className='bg-transparent footer-btn' onClick={() => scrollToSection(featuresRef)}>FEATURES</button>
                        <button className='bg-transparent footer-btn' onClick={() => scrollToSection(getInTouchRef)}>GET IN TOUCH</button>
                    </div>
                </div>
            </div>
        </div>
		</>
	);
}

export default Home;
