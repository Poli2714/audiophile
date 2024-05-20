import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex w-full rounded-md border border-border bg-white px-6 py-[1.125rem] text-sm caret-primary placeholder:text-muted-foreground focus-visible:border-primary focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-50 hover:[&:not(:focus,_:focus-visible)]:cursor-pointer',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input };
