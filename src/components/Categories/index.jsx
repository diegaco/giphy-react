import { lazy, Suspense } from 'react';
import Spinner from '../Spinner';
import useNearScreen from '../../hooks/useNearScreen';

const Categories = lazy(() => import('./Categories'));

export default function LazyCategories() {
  const { isNearScreen, elRef } = useNearScreen({distance: '100px'});
  return (
    <div ref={elRef}>
      {
        isNearScreen ?
          <Suspense fallback={<Spinner/>}><Categories/></Suspense> :
          null
      }
    </div>
  );
}
