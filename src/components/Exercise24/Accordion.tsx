import React, {useState} from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { AccordionProps } from './types';

export default function Accordion({title, content}: AccordionProps) {
  const [isActive, setActive] = useState(false);

  const handleActive = () => {
    setActive(!isActive);
  }

  return (
    <div className='accordion-container'>
      <div className='accordion-title' onClick={handleActive}>
        <span className='accordion-title__span'>{title}</span>
        <span className='accordion-title__icon'>{isActive ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}</span>
      </div>
      {isActive && <div className='accordion-content'>
                      {content}
                    </div>
      }
    </div>
  );
};
