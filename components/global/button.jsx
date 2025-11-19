export default function Button({ text, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 font-semibold"
    >
      {text}
    </button>
  );
}
