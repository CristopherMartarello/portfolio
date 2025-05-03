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
      className={`
        px-6 py-3 md:px-8 md:py-4
        ${bgColor} 
        hover:cursor-pointer hover:bg-brand-blue-500 
        text-white transition duration-200 ease-linear 
        flex items-center gap-2 sm:gap-3 md:gap-4 
        rounded-lg 
        ${className}
      `}
    >
      {icon && (
        <span className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center">
          {icon}
        </span>
      )}
      <span className="font-semibold text-base md:text-xl">
        {text}
      </span>
    </button>
  );
};

export default Button;
