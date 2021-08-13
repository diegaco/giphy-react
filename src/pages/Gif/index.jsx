import Spinner from '../../components/Spinner';
import useGifs from '../../hooks/useGifs';
import Gif from '../../components/Gif';
import { Redirect } from 'wouter';
import { Helmet } from 'react-helmet';
import useUser from '../../hooks/useUser';

export default function Detail({params: { id }}) {
  const { user = {} } = useUser();
  const { gifs: { title, image: { url, width, height } = {} }, loading, error } = useGifs({ type: id })
  const pageTitle = title ? title : '';

  return (
    <div className="p-6 bg-gray-600 rounded">
      {
        error ?
          <Redirect to="/404" /> :
        loading ?
            (
            <>
              <Helmet>
                <title>Cargando...</title>
              </Helmet>
              <Spinner />
            </>
            ) :
          <>
            <Helmet>
              <title>
                {pageTitle} | Giffy
              </title>
            </Helmet>
            <Gif
              id={id}
              title={title}
              url={url}
              width={width}
              height={height}
              userId={user?.id}
            />
          </>
      }
    </div>
  )
}
