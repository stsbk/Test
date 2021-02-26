import React from 'react';

const Checkbox = () => {
    return (
      <div className="form-check">
      <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
              <label className="form-check-label" htmlFor="inlineRadio1"/>
      </div>
    <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
            <label className="form-check-label" htmlFor="inlineRadio2"/>
    </div>
    <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
            <label className="form-check-label" htmlFor="inlineRadio3"/>
    </div>
          <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"/>
            <label className="form-check-label" htmlFor="inlineRadio3"/>
    </div>
      </div>
    );
};

export default Checkbox;
