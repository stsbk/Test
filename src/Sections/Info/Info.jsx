import React from 'react';
import puddle from './assets/puddle.png';
import dots from './assets/dots.png';
import man from './assets/man.png';
import bg from './assets/bg.png';
import './Info.css';
import Card from "../../Components/Card/Card";

const Info = () => {
    return (
      <div className='row'>
          <div className='col-6'>
              <h2>Unbedingt beachten: typische Fehler, die Lernende begehen</h2>
              <p>Das Befolgen sämtlicher wissenschaftlicher Regeln und die sinnvolle,
                  verständliche Darstellung der wesentlichen Aspekte eines Themas können
                  trotz den obigen Hilfen eine große Herausforderung sein. Und zwar insbesondere
                  für den „Anfänger“. Es kann z.B. passieren, dass man bei der schier unendlichen
                  Auswahl an Sekundärliteratur den Überblick verliert. Und obwohl die Fragestellung
                  aus allen möglichen Perspektiven erörtert werden soll, ist beispielsweise dennoch
                  auf eine Balance zwischen der Anzahl an Perspektiven und deren Zusammenhang zur
                  Fragestellung zu achten.</p>

                  <p>Des Weiteren sammeln viele Studierende zu wenige Quellen; sie
                  beschränken sich auf leicht zugängliche und somit nicht immer dem akademischen
                  Standard entsprechende Literatur. Hieraus ergibt sich auch die Gefahr, dass die
                  Informationen eines Werks unpassend und/oder überholt sind.</p>
          </div>
          <div className='col-6 info_assets'>
              <img src={puddle} alt='' className='info_puddle' />
              <img src={dots} alt='' className='info_dots' />
              <img src={man} alt='' className='info_man' />
          </div>
          <div className='col-6 card_cell'>
              <img src={bg} alt='' className='info_bg' />
              <div className='info_card'>
                  <Card />
              </div>
          </div>
          <div className='col-6'>
              <p>Tippfehler, grammatikalische Fehler und eine unpassende äußere Form
                  (Schriftgröße etc.) machen ebenfalls einen schlechten Eindruck.
                  Um dies zu vermeiden, muss die Facharbeit immer wieder überprüft und
                  korrigiert werden. Ein Dozent wird sofort merken, wenn nicht gründlich
                  gearbeitet wurde! Eine unachtsame Arbeitsweise steht synonym für die negativ
                  behaftete Einstellung des/der Studierenden zu der Aufgabe und somit gegen den Autor selbst.</p>
          </div>
      </div>
    );
};

export default Info;
