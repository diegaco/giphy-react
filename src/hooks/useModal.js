import { useState, useEffect } from "react";

export default function useModal() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('modal-open', showModal);
  }, [showModal])

  const onClose = ev => setShowModal(false);

  return {
    showModal,
    setShowModal,
    onClose
  }
}
