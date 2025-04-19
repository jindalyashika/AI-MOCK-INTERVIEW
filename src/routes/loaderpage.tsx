import React from 'react';
import { Loader } from "lucide-react";
import { cn } from "@/lib/utils"; // make sure the path is correct

export const LoaderPage = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "w-screen h-screen flex items-center justify-center bg-transparent z-50",
        className
      )}
    >
      <Loader className="w-6 h-6 min-w-6 min-h-6 animate-spin" />
    </div>
  );
};
