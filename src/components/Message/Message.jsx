import { useState } from "react";

export default function Message({ error, message }) {
  const messageColor = error ? 'red' : 'green';
  const [show, setShow] = useState(true);

  const handleShow = ev => setShow(false);

  return (
    show ?
    <div className={`bg-${messageColor}-300 relative px-7 py-6 rounded-sm flex items-center text-white text-center font-semibold text-lg`}>
      <button className="absolute right-3 top-1 text-3xl leading-none" onClick={handleShow}>╳</button>
      {message}
    </div > :
    null
  )
}
