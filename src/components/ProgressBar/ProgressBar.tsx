import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils';

const ProgressVariants = cva('relative overflow-hidden bg-[#D3CADB]', {
  variants: {
    variant: {
      default: 'bg-[#FF0098]',
      gradient: 'bg-gradient-to-r from-[#4E008E] via-[#FF0098] to-[#FF7500]',
    },
    size: {
      small: 'w-[260px] h-[4px] rounded-lg',
      regular: 'w-[260px] h-[8px] rounded-lg',
      large: 'w-[260px] h-[16px] rounded-lg',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'regular',
  },
});

interface ProgressBarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof ProgressVariants> {
  value: number;
}

export function ProgressBar({
  className,
  variant,
  size,
  value,
  ...props
}: ProgressBarProps) {
  return (
    <div
      className={cn(ProgressVariants({ variant, size }), className)}
      {...props}
    >
      <div
        className='absolute left-0 top-0 h-full bg-[#D3CADB] transition-all duration-300'
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
