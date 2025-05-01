interface ButtonProps {
  icon?: React.ReactNode;
  text: string;
  className?: string;
  bgColor?: string;
}

const Button = ({
  icon,
  text,
  className = "",
  bgColor = "bg-brand-blue-600",
}: ButtonProps) => {
  return (
    <button
      className={`px-8 py-4 ${bgColor} hover:cursor-pointer hover:bg-brand-blue-500 text-white transition duration-200 ease-linear flex items-center gap-4 ${className}`}
    >
      {icon}
      <span className="font-semibold text-xl">{text}</span>
    </button>
  );
};

export default Button;
