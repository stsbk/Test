import React from 'react';
import groupImg from './assets/Group.svg';
import search from './assets/search-alt.svg';
import mobile from './assets/mobile-vibration.svg';
import Button from "../../Components/Button/Button";

const Header = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
              <img src={groupImg} alt='' />
              Papier schreiben
          </a>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">
                  <li className="nav-item active">
                      <a className="nav-link" href="#">
                          <img src={search} alt='' />
                      </a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#">
                          <img src={mobile} alt='' />
                          Anruf
                      </a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#">Generatoren</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#">Preise</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#">Wie funktioniert es?</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#">FAQ</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#">Kontakt</a>
                  </li>
                  <li className="nav-item">
                      <Button className='btn btn-success' text='Anfragen' />
                  </li>
                  <li className="nav-item">
                      <Button className='btn btn-outline-secondary' text='Anmelden' />
                  </li>
              </ul>
          </div>
      </nav>
    );
};

export default Header;
