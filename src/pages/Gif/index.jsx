import Spinner from '../../components/Spinner';
import useGifs from '../../hooks/useGifs';
import Gif from '../../components/Gif';
import { Redirect } from 'wouter';
import useSeo from '../../hooks/useSeo';

export default function Detail({params: { id }}) {
  const { gifs: { title, image: { url, width, height } = {} }, loading, error } = useGifs({ type: id })
  const pageTitle = title ? title : '';
  useSeo({ title: pageTitle, description: `Detail of ${pageTitle}` });

  return (
    <div className="p-6 bg-gray-600 rounded">
      {
        error ?
          <Redirect to="/404" /> :
        loading ?
          <Spinner /> :
          <Gif
            id={id}
            title={title}
            url={url}
            width={width}
            height={height}
          />
      }
    </div>
  )
}
