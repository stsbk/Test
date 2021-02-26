import React from 'react';
import Stepper from 'react-stepper-horizontal';
import './Steps.css';

const Steps = () => {
    return (
      <div className='row'>
          <div className='col'>
              <h2>Die Facharbeit in wenigen Schritten schreiben</h2>
              <p>In den nächsten Abschnitten liest Du, wie eine Facharbeit Schritt für Schritt erstellt wird.
                  Ein Tipp vorweg: Die Länge der wissenschaftlichen Arbeit beträgt i.d.R. zwischen zehn und 12 Seiten.</p>
          </div>
          <div className='row'>
              <Stepper steps={
                  [{title: 'Das passende Thema finden'},
                      {title: 'Die Gliederung erstellen'},
                      {title: 'Die Facharbeit schreiben'},
                      {title: 'Die Facharbeit überprüfen (lassen)'}]
              } activeStep={ 2 } />
          </div>
          <div className='row'>
              <div className='col'>
                  <h3>Schritt 3</h3>
                  <h2>Die Facharbeit schreiben:</h2>
              </div>
          </div>
          <div className='row'>
              <div className='col-6'>
                  <ul className="list">
                      <li>— Einführung</li>
                      <li>— Die Einleitung schreiben</li>
                      <li>— Den Hauptteil verfassen</li>
                      <li>— Das Fazit schreiben</li>
                      <li>— Richtig zitieren will gelernt sein!</li>
                  </ul>
              </div>
              <div className='col-6'>
                  <span>Die Einleitung enthält diese Elemente:</span>
                  <ol>
                      <li>Einführung in das Thema und die Frage, die behandelt wird.</li>
                      <li>Übersicht über die inhaltliche Vorgehensweise und die Struktur der Arbeit.</li>
                      <li>Formulierung des Ziels der Arbeit und Erläuterung der notwendigen Schritte, um dieses zu erreichen.</li>
                  </ol>
                  <span>Übrigens: Die Einleitung macht fünf bis zehn Prozent der Facharbeit aus.</span>
              </div>
          </div>
      </div>
    );
};

export default Steps;
