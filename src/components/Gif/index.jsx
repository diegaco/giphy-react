import { memo } from 'react';
import { Link } from 'wouter';
import Fav from '../Fav';

const Gif = ({id, title, url, width, height, userId }) => {
  return (
    <Link href={`/gif/${id}`}>
      <figure key={id} className="relative rounded-lg overflow-hidden shadow-lg bg-gray-100 hover:shadow-xl cursor-pointer transition-shadow flex flex-col flex-grow">
        <Fav userId={userId} favId={id}/>
        <img className="w-full flex-grow object-cover" src={url} alt={title} width={width} height={height} />
        <div className="p-3">
          <h3 className="text-center font-bold text-purple-500">{title}</h3>
        </div>
      </figure>
    </Link>
  );
}

export default memo(Gif);
