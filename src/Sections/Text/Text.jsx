import React from 'react';
import puddle from './assets/puddle.png';
import dots from './assets/dots.png';
import pic from './assets/young-woman.png';
import './Text.css';

const Text = () => {
    return (
      <div  className='row'>
          <div className='col-6'>
              <h2>Unsere Ghostwriter für Deine Facharbeit - 3 Phasen des Schreibens</h2>
              <p>Entscheidest Du Dich dazu, uns mit dem Schreiben Deiner Facharbeit zu beauftragen (beispielsweise,
                  da Du den Abgabetermin sonst nicht einhalten kannst), profitierst Du von vielen Vorteilen (s.u.).
                  Unsere Autoren arbeiten höchst professionell und
                  erstellen Deine wissenschaftliche Arbeit in drei Phasen:</p>
          </div>
          <div className='col-6 text_assets'>
              <img src={puddle} alt='' className='text_puddle' />
              <img src={dots} alt='' className='text_dots' />
              <img src={pic} alt='' className='text_pic' />
          </div>
          <div className='col-6'>
              <ul className='text_list'>
                  <li>— Vorbereitungsphase</li>
                  <li>— Schreibphase</li>
                  <li>— Nachbereitungsphase</li>
              </ul>
          </div>
          <div className='col-6'>
              <p>In der Vorbereitungsphase findet der Ghostwriter ein geeignetes
                  Thema und er recherchiert nach wissenschaftlicher Literatur.
                  Darauf aufbauend erstellt er die Gliederung für Deine Facharbeit.</p>
          </div>
      </div>
    );
};

export default Text;
