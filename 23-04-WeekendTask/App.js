import React from 'react';
import Accordion from './Accordion';

const App = () => {
  const accordionData = [
    {
      title: 'Section 1',
      content: `Content of section 1`
    },
    {
      title: 'Section 2',
      content: `Content of section 2`
    },
    {
      title: 'Section 3',
      content: `Content of section 3`
    }
  ];

  return (
    <div>
      <h1>Weekend Accordion Task</h1>
      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default App;