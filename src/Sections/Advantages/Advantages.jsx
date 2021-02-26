import React from 'react';
import puddle from './assets/puddle.png';
import dots from './assets/dots.png';
import imgWomen from './assets/img-2.png';
import './Advantages.css';

const Advantages = () => {
    return (
      <div className='row adv_assets'>
          <div className='col-6'>
              <img src={puddle} alt='' className='adv_puddle'/>
              <img src={dots} alt='' className='adv_dots'/>
              <img src={imgWomen} alt='' className='adv_imgWomen'/>
          </div>
          <div className='col-6'>
              <h2>Deine Vorteile auf einen Blick</h2>
              <ul>
                  <li>Wir arbeiten auf wissenschaftlichem Niveau und fertigen Deine Facharbeit in Rekordzeit an.</li>
                  <li>Egal, ob Komplettlösung (= Erstellen einer Facharbeit) oder einzelne Leistung
                      (Korrekturlesen o.Ä.) - unsere Experten wissen, worauf es ankommt.</li>
                  <li>Du profitierst von kostengünstigen Preisen und einer professionellen Betreuung.</li>
                  <li>Wir behandeln Deinen Auftrag diskret.</li>
                  <li>Wir halten unsere Termine garantiert ein.</li>
              </ul>
          </div>
      </div>
    );
};

export default Advantages;
