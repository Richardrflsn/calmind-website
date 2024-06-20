import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialCarousel = () => {
    const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    };

    const users = [
        { id: 1, profile_url: 'src/assets/user4.png', job: 'Software Engineer', name: "James Brown", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { id: 2, profile_url: 'src/assets/user1.png', job: 'Designer', name: "David Wilson", text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
        { id: 3, profile_url: 'src/assets/user2.png', job: 'Product Manager', name: "Michael Smith", text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        { id: 4, profile_url: 'src/assets/user3.png', job: 'College Student', name: "Emily Davis", text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." },
        { id: 5, profile_url: 'src/assets/user5.png', job: 'Data Scientist', name: "Alice Johnson", text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }
    ]

    return (
        <div className="testimonial-carousel w--[90%] h-[300px] text-black">
            <Slider {...settings}>
            {users.map(user => (
                <div key={user.id} className="p-4">
                <div className="flex flex-col justify-start items-start bg-white p-5 gap-5 shadow-lg rounded-lg h-64">
                    <div className="flex flex-row gap-4 bg-inherit">
                    <img src={user.profile_url} alt={user.name} className="w-[100px] h-[100px] rounded-full" />
                    <div className="flex flex-col justify-center bg-inherit">
                        <h3 className="text-[20px] font-bold bg-inherit">{user.name}</h3>
                        <h4 className="text-[16px] text-gray-500 bg-inherit">{user.job}</h4>
                        <img src="src/assets/five-star.png" alt="rating" className="w-[100px] bg-inherit" />
                    </div>
                    </div>
                    <p className="mt-4 text-gray-700 bg-inherit">{user.text}</p>
                </div>
            </div>
            ))}
            </Slider>
        </div>
    );
};

export default TestimonialCarousel;
