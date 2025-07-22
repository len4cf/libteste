import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from 'src/utils';

const badgeVariants = cva(
  'inline-flex items-center justify-center w-fit rounded-md border rounded-[64px] whitespace-nowrap shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden font-semibold font-source font-semibold',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-[var(--color-base-light-02)] text-[var(--color-base-dark-01)] [a&]:hover:bg-primary/90',
        success:
          'border-transparent bg-[var(--color-feedback-success-pure)] text-[var(--color-base-dark-01)] [a&]:hover:bg-secondary/90',
        danger:
          'border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        draft:
          'border-[var(--color-base-dark-01)] text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground',
        warning:
          'border-transparent bg-[var(--color-feedback-alert-pure)] text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground',
      },
      size: {
        small: 'px-3.5 py-1 text-[13px]',
        regular: 'px-3.5 py-1.5 text-[15px]',
        large: 'px-4 py-2 text-[17px]',
      },
      iconOnly: {
        true: '[&>svg]:m-0 px-3',
        false: '[&>svg]:size-3 gap-1',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'regular',
      iconOnly: false,
    },
  },
);

function Badge({
  className,
  variant,
  size,
  iconOnly,
  icon,
  children,
  asChild = false,
  ...props
}: React.ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
    iconOnly?: boolean;
    icon?: React.ReactNode;
  }) {
  const Comp = asChild ? Slot : 'span';

  return (
    <Comp
      data-slot='badge'
      className={cn(badgeVariants({ variant, size, iconOnly }), className)}
      {...props}
    >
      {icon && <span className='pointer-events-none'>{icon}</span>}
      {!iconOnly && children}
    </Comp>
  );
}

export { Badge, badgeVariants };
