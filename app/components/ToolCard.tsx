type ToolCardProps = {
  title: string;
  description: string;
  icon: string;
};

export default function ToolCard({
  title,
  description,
  icon,
}: ToolCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition duration-300 cursor-pointer">
      <div className="text-4xl">{icon}</div>

      <h2 className="mt-4 text-2xl font-bold">
        {title}
      </h2>

      <p className="mt-2 text-gray-600">
        {description}
      </p>
    </div>
  );
}