export interface Doctor {
  id: number;
  name: string;
  specialization: string;
  experience: number;
  rating: number;
  imageUrl: string;
  availability: string;
  education: string;
  languages: string[];
  contact: {
    phone: string;
    email: string;
  };
}

export interface DoctorCardProps {
  doctor: Doctor;
  onBookAppointment?: (doctorId: number) => void;
}