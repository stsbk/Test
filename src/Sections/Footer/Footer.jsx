import React from 'react';
import ReactStars from "react-rating-stars-component";
import Dropdown from "../../Components/Dropdown/Dropdown";
import visa from './aseets/visa.png';
import master from './aseets/master.png';
import pdf from './aseets/Vector.png';

const Footer = () => {
    return (
      <div className='row'>
          <div className='col-3'>
              <p>+49(621) 53399112</p>
              <p>Fragen?Ruf uns einfach an!</p>
              <ReactStars
                count={5}
                size={24}
                activeColor="green"
              />
              <Dropdown text='Infos'/>
          </div>
          <div className='col-3'>
              <ul>
                  <li>Über uns</li>
                  <li>Team</li>
                  <li>Blog</li>
                  <li>Generatoren</li>
                  <li>Preise</li>
                  <li>FAQ</li>
                  <li>Partner</li>
              </ul>
          </div>
          <div className='col-3'>
              <ul>
                  <li>Facharbeit</li>
                  <li>Wissenschaftliche Arbeit</li>
                  <li>Bachelorarbeit</li>
                  <li>Literaturrecherche</li>
                  <li>Masterarbeit</li>
                  <li>Ghostwriting</li>
                  <li>Lektorat & Korrekturlesen</li>
              </ul>
          </div>
          <div className='col-3'>
              <p>Wir im Netz:</p>
              <a href="https://www.facebook.com/bootsnipp"><i id="social-fb"
                                                              className="fa fa-facebook-square fa-3x social"/></a>
              <a href="https://twitter.com/bootsnipp"><i id="social-tw"
                                                         className="fa fa-twitter-square fa-3x social"/></a>
              <a href="https://plus.google.com/+Bootsnipp-page"><i id="social-gp"
                                                                   className="fa fa-google-plus-square fa-3x social"/></a>
              <a href="mailto:bootsnipp@gmail.com"><i id="social-em" className="fa fa-envelope-square fa-3x social"/></a>
              <p>Unsere Zahlungsmethoden:</p>
              <img src={visa} alt='' />
              <img src={master} alt='' />
              <p>DMCA PROTECTED</p>
              <img src={pdf} alt='' /><span>Mediadaten</span>
          </div>
      </div>
    );
};

export default Footer;
