import { useState } from 'react';
import './Accordion.css';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <section className="accordion__card">
      <div className="accordion__header" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <p className={`accordion__icon ${isActive ? 'active' : ''}`}>{isActive ? '-' : '+'}</p>
      </div>

      <div className={`accordion__content ${isActive ? 'active' : ''}`}>
        {isActive && <p className="accordion__info">{content}</p>}
      </div>
    </section>
  );
};

export default Accordion;
