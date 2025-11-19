export default function InputField({ label, type = "text", placeholder, value, onChange }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-gray-700 font-medium">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
