import { useState } from "react";
import { useLocation } from "wouter";

export default function Search() {
  const [search, setSearch] = useState('');
  const [, setLocation] = useLocation();

  const handleSubmit = ev => {
    ev.preventDefault();
    if (search !== '') {
      setLocation(`/gif/${search}`);
    }
  }

  const handleChange = ev => {
    setSearch(ev.target.value);
  }

  return (
    <div className="form-wrapper py-20 flex justify-center">
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
