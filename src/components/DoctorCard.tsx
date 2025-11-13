import React from 'react';
import type { DoctorCardProps } from '../types/Doctor';
// import { DoctorCardProps } from '../types/Doctor';

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor, onBookAppointment }) => {
  const {
    id,
    name,
    specialization,
    experience,
    rating,
    imageUrl,
    availability,
    education,
    languages,
    contact
  } = doctor;

  const handleBookAppointment = () => {
    if (onBookAppointment) {
      onBookAppointment(id);
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="doctor-stars">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={index < rating ? 'star filled' : 'star'}
          >
            {index < rating ? '★' : '☆'}
          </span>
        ))}
        <span className="rating-text">({rating.toFixed(1)})</span>
      </div>
    );
  };

  return (
    <div className="doctor-card">
      {/* Doctor Image */}
      <div className="doctor-image-container">
        <img 
          src={imageUrl} 
          alt={`Dr. ${name}`}
          className="doctor-image"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/default-doctor.png';
          }}
        />
        <div className="availability-badge">{availability}</div>
      </div>

      {/* Doctor Info */}
      <div className="doctor-info">
        <h3 className="doctor-name">Dr. {name}</h3>
        <p className="doctor-specialization">{specialization}</p>
        
        {/* Experience */}
        <div className="doctor-detail">
          <span className="detail-label">Experience:</span>
          <span className="detail-value">{experience} years</span>
        </div>

        {/* Education */}
        <div className="doctor-detail">
          <span className="detail-label">Education:</span>
          <span className="detail-value">{education}</span>
        </div>

        {/* Rating */}
        <div className="doctor-rating">
          {renderStars(Math.round(rating))}
        </div>

        {/* Languages */}
        <div className="doctor-languages">
          <span className="languages-label">Languages:</span>
          <div className="language-tags">
            {languages.map((language, index) => (
              <span key={index} className="language-tag">
                {language}
              </span>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="doctor-contact">
          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <span>{contact.phone}</span>
          </div>
          <div className="contact-item">
            <span className="contact-icon">✉️</span>
            <span>{contact.email}</span>
          </div>
        </div>

        {/* Action Button */}
        <button 
          className="book-appointment-btn"
          onClick={handleBookAppointment}
          disabled={availability === 'Unavailable'}
        >
          {availability === 'Available' ? 'Book Appointment' : 'Not Available'}
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;