import { useState } from 'react';
import { AccordionData } from '../types';
import AccordionItem from './AccordionItem';

import styled from 'styled-components';

const AccordionWrapper = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

function Accordion({ items }: { items: Array<AccordionData> }) {
  const [currentIdx, setCurrentIdx] = useState(-1);
  const btnOnClick = (idx: number) => {
    setCurrentIdx((currentValue) => (currentValue !== idx ? idx : -1));
  };

  return (
    <AccordionWrapper className="accordion">
      {items.map((item, idx) => (
        <AccordionItem
          key={idx}
          data={item}
          isOpen={idx === currentIdx}
          btnOnClick={() => btnOnClick(idx)}
        />
      ))}
    </AccordionWrapper>
  );
}

export default Accordion;