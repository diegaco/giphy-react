import { useEffect } from "react";
import useUser from "../../hooks/useUser";

export default function Fav({ userId, favId }) {
  const { addFav, deleteFav, favs } = useUser();

  const isFav =  favs.find(fav => fav.favId === favId);

  const handleClick = ev => {
    ev.stopPropagation(); // prevent redirect
    if (isFav) {
      deleteFav({ userId, favId})
    } else {
      addFav({ userId, favId})
    }
  }

  const [label, emoji] = isFav ? ['Delete Fav', '❌'] : ['Add Fav', '❤️'];

  return (
    favs.length ?
      <button title={label} onClick={handleClick} className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white bg-opacity-50">
        {emoji}
      </button> :
      null
  );
}
