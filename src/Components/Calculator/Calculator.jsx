import React from 'react';
import Dropdown from "../Dropdown/Dropdown";
import Pagination from "../Pagination/Pagination";
import DatePick from '../Datepicker/Datepicker';
import Button from '../Button/Button';
import './Calculator.css';

const Calculator = () => {
    return (
      <div className='container calc_container justify-content-center'>
          <div className='row calc_text'>
              <div className='col'>
                  <h2>Berechne den Preis</h2>
                  <p>Bitte fülle alle nötigen Felder aus und der Preisrechner zeigt dir den Preis</p>
              </div>
          </div>
          <div className='row justify-content-center'>
              <div className='col-2'>
                  <Dropdown text='Schreiben'/>
              </div>
              <div className='col-2'>
                  <Dropdown text='Bachelor'/>
              </div>
              <div className='col-2'>
                  <Pagination />
              </div>
              <div className='col-2'>
                  <DatePick />
              </div>
              <div className='col-2'>
                  € 56.25
              </div>
              <div className='row'>
                  <div className='col-5'>
                      <Dropdown text='Hausarbeit'/>
                  </div>
                  <div className='col-5'>
                      <Dropdown text='Sprach- & Kulturwissenschaften'/>
                  </div>
                  <div className='col-2'>
                      <Button text='Anfragen'/>
                  </div>
              </div>
          </div>
          </div>
    );
};

export default Calculator;
