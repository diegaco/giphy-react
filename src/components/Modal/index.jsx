export default function Modal({ children, onClose }) {
  return (
    <div className="modal">
      <button onClick={onClose}>╳</button>
    </div>
  );
}
