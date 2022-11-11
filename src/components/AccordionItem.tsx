import { useEffect, useRef, useState } from 'react';
import { AccordionData } from '../types';
import { getRefValue } from '../lib/hooks';

import AccordionList from '../styles/accordionItem';

function AccordionItem({
    data, isOpen, btnOnClick, }: 
    { data: AccordionData; isOpen: boolean; btnOnClick: () => void; }) {

    const contentRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (isOpen) {
          const contentEl = getRefValue(contentRef);

        setHeight(contentEl.scrollHeight);
        
        } else {
          setHeight(0);
        }
    }, [isOpen]);

  return (
     <>
      <AccordionList />
      <li className={`accordion-item ${isOpen ? 'active' : ''}`}>
        <h2 className="accordion-item-title">
          <button className="accordion-item-btn" onClick={btnOnClick}>
            {data.punchline}
          </button>
        </h2>
        <div className="accordion-item-container" style={{ height }}>
          <div ref={contentRef} className="accordion-item-content">
            {data.setup}
          </div>
        </div>
      </li>
     </>
  );
}

export default AccordionItem;