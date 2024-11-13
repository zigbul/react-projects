import Accordion from '../Accordion';
import accordionData from '../../utils/data.js';

const App = () => {
  return (
    <div className="accordion">
      {accordionData.map(({ title, content }) => (
        <Accordion title={title} content={content} key={Math.random()} />
      ))}
    </div>
  );
};

export default App;
