import React from 'react';
import Button from "../../Components/Button/Button";

const Faq = () => {
        return (
      <div className='row'>
          <h2>FAQ</h2>
          <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse"
                              data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                          <h4>Wann muss ich eine Facharbeit schreiben?</h4>
                      </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                       data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                          <p>Eine Facharbeit wird für gewöhnlich in der Oberstufe geschrieben.
                              Sie stellt eine Art Vorbereitung auf das wissenschaftliche
                              Arbeiten an der Universität dar.</p>
                      </div>
                  </div>
              </div>
              <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                              data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                          <h4>Was gehört in eine Facharbeit?</h4>
                      </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse show" aria-labelledby="headingTwo"
                       data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                          <p>Die folgende Gliederung hat sich für eine Facharbeit etabliert.</p>
                          <p>1. Deckblatt   2. Inhaltsverzeichnis
                              3. Einleitung   4. Darstellung des Facharbeitsthemas (= Hauptteil)
                              5. Fazit
                              6. Anhang
                              7. Eigenständigkeitserklärung.</p>
                      </div>
                  </div>
              </div>
              <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                              data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          <h4>Wie lange braucht man, um eine Facharbeit zu schreiben?</h4>
                      </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree"
                       data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                          <p>Diese Frage kann nicht pauschal beantwortet werden, da sich sowohl
                              Deine Motivation als auch Deine Erfahrung bzw. Dein Wissen bezüglich
                              der Facharbeit auf den Arbeitsprozess auswirken. Derweil arbeiten unsere
                              Autoren höchst effizient und liefern Deine wissenschaftliche Arbeit
                              in möglichst kurzer Zeit.</p>
                      </div>
                  </div>
              </div>
          </div>
          <Button text='Jetzt unverbindlich anfragen' className='btn btn-success' />
      </div>
    );
};

export default Faq;
