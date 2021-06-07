import { useState } from "react";
import { useLocation } from "wouter";

export default function Search() {
  const [search, setSearch] = useState('');
  const [, setLocation] = useLocation();

  const handleSubmit = ev => {
    ev.preventDefault();
    if (search !== '') {
      setLocation(`/gifs/${search}`);
    }
  }

  const handleChange = ev => {
    setSearch(ev.target.value);
  }

  return (
    <div className="form-wrapper flex justify-center flex-col items-center">
      <h4 className="text-white text-opacity-50 mb-3">Start typing to search your preferred gifs</h4>
      <form action="" onSubmit={handleSubmit}>
        <input
          className="p-3 rounded border-2 border-purple-500 mr-4 shadow-lg focus:outline-none focus:ring-4 focus:ring-purple-300 focus:border-transparent transition-all"
          onChange={handleChange}
          value={search}
          type="text"
          name="search"
          id="search"
          placeholder="Search for gifs..."
        />
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
