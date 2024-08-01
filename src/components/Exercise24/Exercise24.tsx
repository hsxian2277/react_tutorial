import React from 'react';
import Accordion from './Accordion';
import './styles.css';

const accordion1 = {
  title: 'Accordion 1',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi semper.',
};

const accordion2 = {
  title: 'Accordion 2',
  content: 'Lorem ipsum dolor sit amet.',
};

//Accordions
export default function Exercise24() {

  return (
    <div>
      <Accordion {...accordion1}/>
      <br />
      <Accordion {...accordion2}/>
    </div>
  );
};