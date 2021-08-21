export default function Message({ error, message }) {
  const messageColor = error ? 'red' : 'green';

  return (
    <div className={`bg-${messageColor}-300 p-4 rounded-sm flex items-center`}>{ message }</div>
  )
}
