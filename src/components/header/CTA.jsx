import React from 'react';
// import CV from '../../assets/Rasif-Taghizade-CV.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href="https://drive.google.com/file/d/1vsJcPxdnVsNaHoLDwnSmnWZoRBQDpUX0/view" target='_blank' download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;
