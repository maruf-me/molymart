"use client";

import { Progress as Component } from "@/components/ui/progress";
import { useEffect, useState } from "react";

type ProgressProps = {
  value: number;
  className?: string;
  indicatorClassName?: string;
};

export function Progress({
  value = 0,
  className,
  indicatorClassName,
}: ProgressProps) {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(value), 300);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <Component
      value={progress}
      className={`${className}`}
      indicatorClassName={indicatorClassName}
    />
  );
}
