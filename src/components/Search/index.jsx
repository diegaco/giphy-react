import { useState, useEffect } from "react";
import { useLocation, useRoute } from "wouter";

const RATINGS = ['g', 'pg', 'pg-13', 'r'];

export default function Search() {
  const [, params] = useRoute('/gifs/:keyword/:rating?');

  const initialSearch = params && params.keyword != null ? params.keyword : '';
  const initialRating = params && params.rating != null ? params.rating : '';

  const [search, setSearch] = useState(initialSearch)
  const [rating, setRating] = useState(initialRating);
  const [, setLocation] = useLocation();


  const handleSubmit = ev => {
    ev.preventDefault();
    if (search !== '') {
      setLocation(`/gifs/${search}/${rating}`);
    }
  }

  const handleChange = ev => {
    setSearch(ev.target.value);
  }

  const handleChangeRating = ev => {
    setRating(ev.target.value);
  }

  useEffect(() => {
    setSearch(initialSearch);
    setRating(initialRating);
  }, [initialRating, initialSearch])

  return (
    <div className="form-wrapper flex justify-center flex-col md:w-auto w-full">
      <h4 className="text-white text-opacity-50 mb-3">Start typing to search your preferred gifs</h4>
      <form className="flex-grow flex md:w-auto w-full" action="" onSubmit={handleSubmit}>
        <input
          className="flex-grow p-3 rounded border-2 border-purple-500 mr-4 shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-300 focus:border-transparent transition-all"
          onChange={handleChange}
          value={search}
          type="text"
          name="search"
          id="search"
          placeholder="Search for gifs..."
        />
        <select
          value={rating}
          onChange={handleChangeRating}
          className="flex-grow p-3 rounded border-2 border-purple-500 mr-4 shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-300 focus:border-transparent transition-all"
          name="rating"
          id="rating"
        >
          <option value="" disabled defaultValue>Rating type</option>
          {
            RATINGS.map(rating => <option key={rating}>{rating}</option>)
          }
        </select>
        <button
          type="submit"
          className="px-5 py-3 font-medium rounded bg-purple-500 text-white focus:outline-none focus:ring-4 focus:ring-purple-300 focus:border-transparent transition-all"
        >
          Search
        </button>
      </form>
    </div>
  )
}
