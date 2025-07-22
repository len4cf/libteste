import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { ChevronRight, MoreHorizontal } from 'lucide-react';

import { cn } from '@/utils';
import { cva, type VariantProps } from 'class-variance-authority';

interface BreadcrumbItemType {
  label: string;
  href?: string;
  current?: boolean;
}

const breadcrumbVariants = cva('px-4 py-2.5 rounded-md', {
  variants: {
    variant: {
      default: '',
      background: 'bg-[var(--color-brand-secondary-cold-lightest)]',
      withLine:
        'bg-transparent border  border-[var(--color-brand-secondary-cold-lightest)] border-2',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

interface BreadcrumbsProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof breadcrumbVariants> {
  items: BreadcrumbItemType[];
  maxVisibleItems?: number;
}

function RadixBreadcrumb({ ...props }: React.ComponentProps<'nav'>) {
  return <nav aria-label='breadcrumb' data-slot='breadcrumb' {...props} />;
}

function BreadcrumbList({ className, ...props }: React.ComponentProps<'ol'>) {
  return (
    <ol
      data-slot='breadcrumb-list'
      className={cn(
        'text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5',
        className,
      )}
      {...props}
    />
  );
}

function BreadcrumbItem({ className, ...props }: React.ComponentProps<'li'>) {
  return (
    <li
      data-slot='breadcrumb-item'
      className={cn('inline-flex items-center gap-1.5', className)}
      {...props}
    />
  );
}

function BreadcrumbLink({
  asChild,
  className,
  ...props
}: React.ComponentProps<'a'> & {
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : 'a';

  return (
    <Comp
      data-slot='breadcrumb-link'
      className={cn('hover:text-foreground transition-colors', className)}
      {...props}
    />
  );
}

function BreadcrumbPage({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot='breadcrumb-page'
      role='link'
      aria-disabled='true'
      aria-current='page'
      className={cn('text-foreground font-normal', className)}
      {...props}
    />
  );
}

function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<'li'>) {
  return (
    <li
      data-slot='breadcrumb-separator'
      role='presentation'
      aria-hidden='true'
      className={cn('[&>svg]:size-3.5', className)}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  );
}

function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot='breadcrumb-ellipsis'
      role='presentation'
      aria-hidden='true'
      className={cn('flex size-9 items-center justify-center', className)}
      {...props}
    >
      <MoreHorizontal className='size-4' />
      <span className='sr-only'>More</span>
    </span>
  );
}

export const Breadcrumbs = ({
  items,
  className,
  variant,
  maxVisibleItems = 4,
  ...props
}: BreadcrumbsProps) => {
  if (!items || items.length === 0) return null;

  const totalItems = items.length;
  const shouldShowEllipsis = totalItems > maxVisibleItems;

  const visibleItems: BreadcrumbItemType[] = shouldShowEllipsis
    ? [items[0], ...items.slice(totalItems - (maxVisibleItems - 1))]
    : items;

  return (
    <RadixBreadcrumb
      className={cn(breadcrumbVariants({ variant }), className)}
      {...props}
    >
      <BreadcrumbList className='text-[var(--color-base-dark-03)] font-source'>
        {visibleItems.map((item, index) => {
          const isLast = index === visibleItems.length - 1;

          if (shouldShowEllipsis && index === 1) {
            return (
              <React.Fragment key='ellipsis'>
                <BreadcrumbItem>
                  <BreadcrumbEllipsis />
                </BreadcrumbItem>
                <BreadcrumbSeparator />
              </React.Fragment>
            );
          }

          return (
            <React.Fragment key={index}>
              <BreadcrumbItem>
                {item.current || isLast ? (
                  <BreadcrumbPage className='text-[var(--color-brand-secondary-warm-dark)] font-bold'>
                    {item.label}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                )}
              </BreadcrumbItem>

              {!isLast && <BreadcrumbSeparator />}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </RadixBreadcrumb>
  );
};
