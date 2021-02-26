import React from 'react';
import ReactStars from "react-rating-stars-component";
import comma from './assets/Vector.svg';
import user from './assets/user.png';

const Testimonials = () => {
    return (
      <div className='card'>
          <div className='row justify-content-between'>
              <div className='col-2'>
                  <img src={comma} alt='' />
              </div>
              <div className='col-6'>
                  <ReactStars
                    count={5}
                    size={24}
                    activeColor="green"
                  />
              </div>
              <div className='row'>
                  <p>Ich wollte mich recht herzlich bei Ihnen für die
                      tolle Analyse bedanken - ich habe die Note A+ bekommen.
                      Tausend Dank für die tolle Arbeit und liebe Grüße aus Wien</p>
              </div>
              <div className='row'>
                  <div className='col-6'>
                      <img src={user} alt='' />ID: 21015
                  </div>
                  <p>Bachelorarbeit|Geisteswissenschaften</p>
              </div>
          </div>
      </div>
    );
};

export default Testimonials;
