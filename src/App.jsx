// import { useState } from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
// import Landing_Page from './Components/Landing_Page/Landing_Page';
// import SignUp from "./Components/Sign_up/Sign_Up";
// import Login from "./Components/Login/Login";
// import InstantConsultation from "./Components/InstantConsultationBooking/InstantConsultation";
// import FindDoctorSearch from "./Components/FindDoctorSearch/FindDoctorSearch";
import DoctorCard from "./Components/DoctoCard/DoctorCard";

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<DoctorCard name={"linda rodriguez"} speciality={"Dentist"} experience={"9 years experience"} ratings={3}/>}/>
          {/* <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<SignUp />}/> */}
          {/* <Route path="/instant-consultation" element={<InstantConsultation />}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
