import { useState } from 'react';
import useUser from '../../hooks/useUser';
import Modal from '../Modal';

export default function Fav({ favId }) {
  const { user, addFav, deleteFav, favs } = useUser();
  const { id } = user || {};
  const [ showModal, setShowModal ] = useState(false);
  const isFav = favs.find(fav => fav.favId === favId);
  console.log(id);

  const handleClick = ev => {
    ev.stopPropagation(); // prevent redirect

    if (!id) {
      setShowModal(true);
    } else {
      if (isFav) {
        deleteFav({ userId: id, favId})
      } else {
        addFav({ userId: id, favId})
      }
    }
  }

  const onClose = () => setShowModal(false);

  const [label, emoji] = isFav ? ['Delete Fav', '❌'] : ['Add Fav', '❤️'];

  return (
    <>
      {
        showModal ?
          <Modal onClose={onClose} /> :
        null
      }
      <button title={label} onClick={handleClick} className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white bg-opacity-50">
        {emoji}
      </button>
    </>
  );
}
