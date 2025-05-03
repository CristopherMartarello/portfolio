interface TimelineItemProps {
  date: string;
  description: string;
  icon?: React.ReactNode;
}

const TimelineItem = ({ date, description, icon }: TimelineItemProps) => {
  return (
    <div className="relative flex flex-row md:flex-col justify-start md:justify-center items-center z-10 w-full md:w-1/6 font-semibold">
      
      {/* Bolinha */}
      <div className="absolute w-6 h-6 rounded-full bg-brand-blue-600 left-0 md:left-1/2 transform md:-translate-x-1/2" />

      {/* Texto + ícone (mobile: tudo junto, desktop: texto separado) */}
      <div className="ml-10 md:ml-0 md:absolute md:top-10 flex flex-col space-y-2 justify-center items-start md:items-center text-left md:text-center">
        
        {/* Ícone: dentro no mobile, fora no desktop */}
        {icon && (
          <div className="block md:hidden mb-2">{icon}</div> // visível só no mobile
        )}

        <div className="text-2xl text-zinc-700 dark:text-zinc-300">{date}</div>
        <div className="text-xl text-zinc-800 dark:text-zinc-400">{description}</div>
      </div>

      {/* Ícone no desktop, posicionado sobre a linha */}
      {icon && (
        <div className="hidden md:flex md:absolute md:bottom-16 w-13 h-13 rounded-md">
          {icon}
        </div>
      )}
    </div>
  );
};

export default TimelineItem;
