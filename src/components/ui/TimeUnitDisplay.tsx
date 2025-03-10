import { ReactNode } from "react";

export default function TimeUnitDisplay({ children }: { children: ReactNode }) {
  return (
    <span className="flex h-6 w-6 items-center justify-center rounded-sm bg-white p-1">
      {children}
    </span>
  );
}
