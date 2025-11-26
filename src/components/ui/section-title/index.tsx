import { cn } from "@/lib/utils";

type SectionTitleProps = {
  subtitle: string
  title: string
  className?: string
}


export function SectionTitle({ subtitle, title, className}: SectionTitleProps) {
  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <span className="font-mono text-lg text-purple-400">
        {`../${subtitle}`}
      </span>
      <h3 className="text-3xl font-medium text-gray-600 dark:text-gray-200">
        {title}
      </h3>
    </div>
  );
}