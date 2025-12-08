export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-10">
      <h2 className="text-3xl font-bold">{title}</h2>
      {subtitle && (
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
}
