import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector('#modal-root');

export default function Modal({children, onClose }) {
  const el = useRef(null);
  if (!el.current) {
    el.current = document.createElement('div');
  }

  useEffect(() => {
    modalRoot.appendChild(el.current);
    return () => modalRoot.removeChild(el.current);
  }, [])

  const handleClose = ev => {
    onClose();
  }

  return createPortal(
    <>
      <div onClick={ev=>ev.stopPropagation()}>
        <div  className="modal w-11/12 md:w-10/12 lg:w-9/12 xl:w-7/12 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-auto rounded-lg overflow-hidden bg-white z-20 shadow-lg">
          <button className="ml-auto text-3xl leading-none absolute top-2 right-4" onClick={handleClose}>╳</button>
          <div className="modal-content">
            {children}
          </div>
        </div>
        <div onClick={handleClose} className="modal-backdrop fixed top-0 left-0 bg-black opacity-50 z-10 w-screen h-screen"></div>
      </div>
    </>,
    el.current
  );
}
