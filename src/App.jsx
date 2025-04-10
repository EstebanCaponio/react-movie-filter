import { useState } from 'react';
import films from './data/films';

function App() {

  // con ...new set sto usando spread e creo un nuovo array con solo i generi, set fa in modo che non ci siano doppioni
  const genders = [...new Set(films.map(item => item.genre))];
  console.log(genders)

  return (
    <>
      <div>

        <select>
          <option>---</option>
          {genders.map((gender, index) => <option key={index}>{gender}</option>)}
        </select>

        <div>
          {films.map(film =>
            <div key={film.id}>
              <h3>{film.title}</h3>
              <p>{film.genre}</p>
              <hr />
            </div>)}
        </div>
      </div>
    </>
  )
}

export default App
