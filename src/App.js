import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  const [listItems] = useState(data)

  return (
    <div className="container">
      <h3>Login Info</h3>
      <section className="info">
        {listItems.map((listItem) => {
          return (
            <SingleQuestion key={listItem.id} question={listItem} ></SingleQuestion>
          );
        })}
      </section>
    </div>
  );
}

export default App;
