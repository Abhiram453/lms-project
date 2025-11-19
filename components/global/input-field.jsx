export default function InputField({ label, type = "text", className, ...props }) {
  return (
    <div className="w-full">
      {label && <label className="block mb-1 text-sm font-medium">{label}</label>}
      <input
        type={type}
        {...props}
        className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300 ${className}`}
      />
    </div>
  );
}


