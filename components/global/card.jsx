export default function Card({ title, children }) {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      {title && <h3 className="text-lg font-semibold mb-3">{title}</h3>}
      <div>{children}</div>
    </div>
  );
}
