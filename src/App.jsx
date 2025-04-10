import { useEffect, useState } from 'react';
import dataFilms from './data/films';

function App() {
  // con ...new set,nuovo array con solo i generi, set fa in modo che non ci siano doppioni
  const genres = [...new Set(dataFilms.map(item => item.genre))];

  const [filmsList, setfilmsList] = useState(dataFilms);
  const [filterGenre, setfilterGenre] = useState('');
  const [searchTitle, setSearchTitle] = useState('');

  let results = dataFilms;

  useEffect(() => {

    console.log('ho cambiato option') // debug

    if (filterGenre !== '') {
      results = results.filter(film => film.genre.includes(filterGenre));
    }

    if (searchTitle !== '') {
      results = results.filter(film =>
        film.title.toLowerCase().includes(searchTitle.toLowerCase())
      );
    }

    setfilmsList(results);
  }, [filterGenre, searchTitle]);

  const searchInputChange = (event) => {
    setSearchTitle(event.target.value);
  };

  return (
    <>
      <div>
        <div>
          <select value={filterGenre} onChange={event => { setfilterGenre(event.target.value) }}>
            <option value="">---</option>
            {genres.map((gender, index) => <option key={index}>{gender}</option>)}
          </select>

          <input type="text"
            placeholder='titolo'
            value={searchTitle}
            onChange={searchInputChange} />
        </div>

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
