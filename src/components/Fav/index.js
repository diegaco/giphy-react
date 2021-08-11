import { addFavorite, getFavorites } from "../../services/firebase.utils";

export default function Fav({ userId, favId }) {

  // getFavorites({ userId });
  const handleClick = ev => {
    ev.stopPropagation(); // prevent redirect
    addFavorite({ userId, favId });
  }

  return (
    <button onClick={handleClick} className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white bg-opacity-50">
      ❤️
    </button>
  )
}
