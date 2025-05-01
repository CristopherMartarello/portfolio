interface SkeletonProps {
  title: string;
  subtitle?: string;
  description: string;
}

export default function Skeleton({
  title,
  subtitle,
  description,
}: SkeletonProps) {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">{title}</p>
      {subtitle && (
        <p className="font-normal text-base text-white">{subtitle}</p>
      )}
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        {description}
      </p>
    </div>
  );
}
