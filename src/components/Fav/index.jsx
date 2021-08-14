import useUser from '../../hooks/useUser';

export default function Fav({ favId }) {
  const { user, addFav, deleteFav, favs } = useUser();
  const { id } = user || {};
  const isFav = favs.find(fav => fav.favId === favId);
  console.log(id);

  const handleClick = ev => {
    ev.stopPropagation(); // prevent redirect
    if (isFav) {
      deleteFav({ userId: id, favId})
    } else {
      addFav({ userId: id, favId})
    }
  }

  const [label, emoji] = isFav ? ['Delete Fav', '❌'] : ['Add Fav', '❤️'];

  return (
    favs.length && id ?
      <button title={label} onClick={handleClick} className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white bg-opacity-50">
        {emoji}
      </button> :
      null
  );
}
