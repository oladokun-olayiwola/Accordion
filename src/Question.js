import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({question}) => {

const {id, info, title} = question

const [showData, setShowData] = useState(false)

  return <article className='question'>
      <header>
        <h3>{title}</h3>
        <button onClick={() => setShowData(!showData)}>
          { showData ? <AiOutlineMinus />  : <AiOutlinePlus />}
        </button>
      </header>
      <p>{showData && info}</p>
  </article>;
};

export default Question;
