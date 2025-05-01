interface TimelineItemProps {
  date: string;
  description: string;
  icon?: React.ReactNode;
}

const TimelineItem = ({ date, description, icon }: TimelineItemProps) => {
  return (
    <div className="relative flex flex-col justify-center items-center z-10 w-1/6 font-semibold">
      {icon && (
        <div className="absolute bottom-16 flex w-13 h-13 rounded-md">
          {icon}
        </div>
      )}
      <div className="w-5 h-5 rounded-full bg-brand-blue-600" />
      <div className="absolute top-10 flex flex-col space-y-5 justify-center items-center text-center">
        <div className="text-2xl text-zinc-700 dark:text-zinc-300">{date}</div>
        <div className="text-xl text-zinc-800 dark:text-zinc-400">
          {description}
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
