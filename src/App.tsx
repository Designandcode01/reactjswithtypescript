import React from 'react';
import DoctorCard from './components/DoctorCard';
// import { Doctor } from './types/Doctor';
import './App.css';
import './components/DoctorCard.css';
import type { Doctor } from './types/Doctor';
// import { Welcome } from './components/Welcome';

const App: React.FC = () => {
  // Sample doctors data
  const doctors: Doctor[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      specialization: "Cardiologist",
      experience: 15,
      rating: 4.8,
      imageUrl: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400",
      availability: "Available",
      education: "MD, Harvard Medical School",
      languages: ["English", "Spanish", "French"],
      contact: {
        phone: "+1 (555) 123-4567",
        email: "s.johnson@medical.com"
      }
    },
    {
      id: 2,
      name: "Michael Chen",
      specialization: "Neurologist",
      experience: 12,
      rating: 4.9,
      imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400",
      availability: "Busy",
      education: "MD, Stanford University",
      languages: ["English", "Mandarin"],
      contact: {
        phone: "+1 (555) 987-6543",
        email: "m.chen@neurocare.com"
      }
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      specialization: "Pediatrician",
      experience: 8,
      rating: 4.7,
      imageUrl: "https://images.unsplash.com/photo-1594824947933-d0501ba2fe65?w=400",
      availability: "Available",
      education: "MD, Johns Hopkins University",
      languages: ["English", "Spanish"],
      contact: {
        phone: "+1 (555) 456-7890",
        email: "e.rodriguez@childrenshospital.com"
      }
    }
  ];

  const handleBookAppointment = (doctorId: number) => {
    alert(`Booking appointment with doctor ID: ${doctorId}`);
    // In a real app, you would navigate to booking page or open a modal
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pursuit Medical Center</h1>
        <h3>Welcome to Pursuit Medical Center</h3>
      {/* <div>
        <Welcome />
      </div> */}
        <h1>Meet Our Doctors</h1>
        <p>Book an appointment with our experienced medical professionals</p>
      </header>
      
      <main className="doctors-container">
        <div className="doctors-grid">
          {doctors.map(doctor => (
            <DoctorCard 
              key={doctor.id}
              doctor={doctor}
              onBookAppointment={handleBookAppointment}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;









// import './App.css'
// // import Welcome from './components/Welcome'
// import {Welcome} from './components/Welcome'



// function App() {
  

//   return (
//     <>
      // <h1>Pursuit Medical Center</h1>
      // <div>
      //   <Welcome />
      // </div>
//     </>
//   )
// }

// export default App







// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <div>
// //         <a href="https://vite.dev" target="_blank">
// //           <img src={viteLogo} className="logo" alt="Vite logo" />
// //         </a>
// //         <a href="https://react.dev" target="_blank">
// //           <img src={reactLogo} className="logo react" alt="React logo" />
// //         </a>
// //       </div>
// //       <h1>Vite + React</h1>
// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// //         </button>
// //         <p>
// //           Edit <code>src/App.tsx</code> and save to test HMR
// //         </p>
// //       </div>
// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more
// //       </p>
// //     </>
// //   )
// // }

// // export default App
