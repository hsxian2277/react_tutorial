import '../App.css';
import { Planet } from './Planet';

// Exercise using map to render array elements conditionally

export default function Exercise2() {
  const planets = [
    {name: 'Mars', isGasPlanet: false},
    {name: 'Earth', isGasPlanet: false},
    {name: 'Jupiter', isGasPlanet: true},
    {name: 'Venus', isGasPlanet: false},
    {name: 'Neptune', isGasPlanet: true},
    {name: 'Uranus', isGasPlanet: true},
  ];

  return (
    <div className='exercise2'>
      {planets.map(
        (planet, key) => planet.isGasPlanet && <Planet key={key} name={planet.name} />
      )}
    </div>
  );
}
