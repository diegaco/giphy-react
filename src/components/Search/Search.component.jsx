import { useState } from "react"

export default function Search({setKeyword}) {
  const [search, setSearch] = useState('');

  const handleSubmit = ev => {
    ev.preventDefault();
    setKeyword(search);
  }

  const handleChange = ev => {
    setSearch(ev.target.value);
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <input onChange={handleChange} value={search} type="text" name="search" id="search" placeholder="Search gifs..."/>
      <button type="submit">Search</button>
    </form>
  )
}
