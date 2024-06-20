import Therapist from './Therapist';

const TherapistList = () => {
    let doctors = [
        { id: 1, doctor_url: "src/assets/doctor-1.jpg", name: "Jane Smith", rate: "4.9", description: "Experienced therapist specializing in cognitive behavioral therapy.", workingHours: '07.00 - 11.00 and 17.00 - 21.00' },
        { id: 2, doctor_url: "src/assets/doctor-2.jpg", name: "Emily Clark", rate: "5", description: "Expert in family therapy and relationship counseling.", workingHours: '11.00 - 15.00' },
        { id: 3, doctor_url: "src/assets/doctor-3.jpg", name: "John Doe", rate: "4.8", description: "Specializes in stress management and mindfulness techniques.", workingHours: '14.00 - 20.00' }
    ];

    return (
        <div className="therapist-list flex flex-col items-center">
            <h1 className="text-white justify-center text-[48px] font-bold text-center mb-5">Our Therapist</h1>
            <div className="flex flex-row gap-10">
                {doctors.map((doctor) => (
                    <Therapist
                        key={doctor.id}
                        doctor_url={doctor.doctor_url}
                        name={doctor.name}
                        rate={doctor.rate}
                        description={doctor.description}
                        workingHours={doctor.workingHours} 
                    />
                ))}
            </div>
        </div>
    );
};

export default TherapistList;