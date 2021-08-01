import { act, renderHook } from '@testing-library/react-hooks';
import useForm from './useForm';

test('should change keyword', () => {
  const { result } = renderHook(() => useForm());
  act(() => {
    result.current.updateSearch('batman');
  })

  expect(result.current.search).toBe('batman')
})


test('should use initial keyword', () => {
  const { result } = renderHook(() => useForm({
    initialSearch: 'matrix'
  }));

  expect(result.current.search).toBe('matrix')
})


test('should update correctly times when used twice', () => {
  const { result } = renderHook(() => useForm({
    initialSearch: 'matrix'
  }));

  act(() => {
    result.current.updateSearch('b');
    result.current.increaseCount();
    result.current.updateSearch('ba');
    result.current.increaseCount();
  })

  expect(result.current.search).toBe('ba')
  expect(result.current.times).toBe(2)
})
