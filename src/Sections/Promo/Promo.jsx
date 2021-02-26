import React from 'react';
import Button from "../../Components/Button/Button";
import puddle from './assets/puddle.png';
import dots from './assets/dots.png';
import promoImg from './assets/promo-img.png';
import './Promo.css';

const Promo = () => {
    return (
      <div className='row'>
          <div className='col-6'>
              <h1>Die Facharbeit schreiben – Anforderungen, Gliederung
                  und typische Fehler </h1>
              <p>Du bist auf der Suche nach einem professionellen Ghostwriter,
                  kannst aber den passenden Autor nicht finden? Kein Wunder,
                  denn im Internet gibt es eine schier unendliche Anzahl
                  an Angeboten! Da kann man sich bei der Auswahl leicht irren.
                  Aber nicht bei uns! Die Autoren unserer Agentur schreiben
                  wissenschaftliche Facharbeiten in bester Qualität,
                  die sich stets nach den Bedürfnissen des Auftraggebers richten.</p>
              <p>Wir bieten unseren Kunden eine lange Reihe von Schreibdienstleistungen:
                  Themenfindung, Hilfe bei der Literaturrecherche,
                  Verfassen von wissenschaftlichen Arbeiten (Haus-, Seminar-, Bachelor-, Masterarbeit usw.),
                  Korrekturlesen, Lektorat und Plagiatsprüfung.
                  Diese Leistungen stehen nicht nur auf Deutsch,
                  sondern beispielsweise auch auf Englisch zur Verfügung.</p>
              <Button className='btn btn-success' text='Probier jetzt aus' />
          </div>
          <div className='col-6 promo-img'>
              <img src={puddle} alt='' className='promo_puddle' />
              <img src={dots} alt='' className='promo_dots' />
              <img src={promoImg} alt='' className='promo' />
          </div>
      </div>
    );
};

export default Promo;
