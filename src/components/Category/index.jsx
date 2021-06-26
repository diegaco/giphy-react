import useLocation from "wouter/use-location"

export default function Category({ trending }) {
  const [, setLocation] = useLocation();
  const handleClick = ev => {
    ev.preventDefault();
    setLocation(`gifs/${trending}`);
  }
  return (
    <a className="text-white py-2" href="/" onClick={handleClick}>
      { trending }
    </a>
  )
}
