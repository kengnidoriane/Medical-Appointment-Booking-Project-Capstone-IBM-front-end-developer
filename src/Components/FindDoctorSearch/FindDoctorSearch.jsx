import { useState } from 'react';
import './FindDoctorSearch.css';
import { FaSearch } from 'react-icons/fa'; // Importing the search icon

const initSpeciality = [
    'Dentist', 'Gynecologist/obstetrician', 'General Physician', 'Dermatologist',
    'Ear-nose-throat (ent) Specialist', 'Homeopath', 'Ayurveda'
];

const FindDoctorSearch = () => {
    const [doctorResultHidden, setDoctorResultHidden] = useState(true);
    const [searchDoctor, setSearchDoctor] = useState('');
    const [specialities] = useState(initSpeciality);

    const handleDoctorSelect = (speciality) => {
        setSearchDoctor(speciality);
        setDoctorResultHidden(true);
        // Logic for navigation or action after selection
    };

    return (
        <div className='finddoctor'>
            <center>
                <h1>Find a Doctor and Consult Instantly</h1>
                <div>
                    <i style={{ color: '#000000', fontSize: '20rem' }} className="fa fa-user-md"></i>
                </div>
                <div className="home-search-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className="doctor-search-box">
                        <input
                            type="text"
                            className="search-doctor-input-box"
                            placeholder="Search doctors, clinics, hospitals, etc."
                            onFocus={() => setDoctorResultHidden(false)}
                            onBlur={() => setDoctorResultHidden(true)}
                            value={searchDoctor}
                            onChange={(e) => setSearchDoctor(e.target.value)}
                        />
                        <div className="search-icon">
                            <FaSearch />
                        </div>
                        <div className="search-doctor-input-results" hidden={doctorResultHidden}>
                            {
                                specialities.map(speciality => (
                                    <div 
                                        className="search-doctor-result-item" 
                                        key={speciality} 
                                        onMouseDown={() => handleDoctorSelect(speciality)}
                                    >
                                        <div className="result-item">
                                            <FaSearch className="result-icon" />
                                            <span>{speciality}</span>
                                            <span className="speciality-label">Speciality</span>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </center>
        </div>
    );
}

export default FindDoctorSearch;
