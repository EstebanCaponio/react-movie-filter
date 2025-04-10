import { useEffect, useState } from 'react';
import dataFilms from './data/films';

function App() {
  // con ...new set,nuovo array con solo i generi, set fa in modo che non ci siano doppioni
  const genres = [...new Set(dataFilms.map(item => item.genre))];
  // console.log(genres);

  const [filmsList, setfilmsList] = useState(dataFilms);
  const [filterGenre, setfilterGenre] = useState('');
  let results = dataFilms;

  useEffect(() => {
    console.log('ho cambiato option')

    if (filterGenre !== '') {
      results = dataFilms.filter(film => film.genre.includes(filterGenre));
    }

    setfilmsList(results);
  }, [filterGenre]);

  return (
    <>
      <div>
        <select value={filterGenre} onChange={event => { setfilterGenre(event.target.value) }}>
          <option value="">---</option>
          {genres.map((gender, index) => <option key={index}>{gender}</option>)}
        </select>

        <div>
          {filmsList.map(film =>
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
