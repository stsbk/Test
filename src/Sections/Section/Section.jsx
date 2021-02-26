import React from 'react';
import puddle from '../Promo/assets/puddle.png';
import dots from '../Promo/assets/dots.png';
import sectionImg from './assets/section_img.png';
import './Section.css';
import Card from "../../Components/Card/Card";

const Section = () => {
    return (
      <div className='row section'>
          <div className='col-6'>
              <img src={puddle} alt='' className='section_puddle' />
              <img src={sectionImg} alt='' className='section_main' />
              <img src={dots} alt='' className='section_dots' />
              <div className='section_card'>
                  <Card />
              </div>
          </div>
          <div className='col-6'>
              <h2>Die Anforderungen an eine Facharbeit</h2>
              <p>In Deutschland, sprich: an verschiedenen Schulen bestehen
                  zum Teil deutliche Unterschiede hinsichtlich den Anforderungen
                  an eine Facharbeit; sie beziehen sich vor allem auf den Umfang,
                  die gewährte Schreibfrist und den Grad an notwendigen Kompetenzen.
                  Zudem können die Erwartungen der einzelnen Dozenten mehr oder weniger weit auseinanderliegen.</p>
              <p>Da die wissenschaftliche Aufgabe normalerweise die erste Begegnung
                  mit dem akademischen Anspruch an Selbständigkeit,
                  Wissensvolumen und Kohärenz ist, stellt die Facharbeit für die meisten
                  Schüler und Schülerinnen eine große Herausforderung dar.</p>
          </div>
      </div>
    );
};

export default Section;
