import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const base =
  "flex h-11 w-full rounded-md border border-charcoal/15 bg-white px-4 py-3 font-body text-sm text-charcoal placeholder:text-charcoal/50 outline-none transition-colors focus:border-charcoal/30 disabled:cursor-not-allowed disabled:opacity-50";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={cn(base, className)}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";


