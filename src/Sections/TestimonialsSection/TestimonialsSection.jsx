import React from 'react';
import Testimonials from "../../Components/Testimonials/Testimonials";
import Checkbox from '../../Components/Checkbox/Checkbox';

const TestimonialsSection = () => {
    return (
      <div className='row'>
          <div className='col'>
              <h2>Lies hier, was unsere Kunden über uns zu sagen haben</h2>
              <p>Lass dich von den Erfolgsgeschichten unserer Kunden inspirieren!</p>
          </div>
          <div className='row'>
              <div className='col'>
                  <Testimonials />
              </div>
              <div className='col'>
                  <Testimonials />
              </div>
              <div className='col'>
                  <Testimonials />
              </div>
          </div>
          <div className='row'>
              <p>Feedback hinzufügen</p>
          </div>
          <div className='row'>
              <Checkbox />
          </div>
      </div>

    );
};

export default TestimonialsSection;
