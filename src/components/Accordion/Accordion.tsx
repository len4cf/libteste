'use client';

import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';

import { cn } from '@/utils';

type AccordionTriggerProps = React.ComponentProps<
  typeof AccordionPrimitive.Trigger
> & {
  subtitle: string;
  disabled?: boolean;
  className?: string;
};

function RadixAccordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot='accordion' {...props} />;
}

function AccordionItem({
  className,
  disabled,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot='accordion-item'
      className={cn(
        'border-b-2 last:border-b-0 hover:border-[var(--color-brand-primary-pure)]',
        disabled && 'hover:border-[var(--color-base-light-03)] ',
        className,
      )}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  disabled = false,
  subtitle,
  ...props
}: AccordionTriggerProps) {
  return (
    <AccordionPrimitive.Header className='flex'>
      <AccordionPrimitive.Trigger
        data-slot='accordion-trigger'
        disabled={disabled}
        className={cn(
          'group focus-visible:border-ring text-[var(--color-base-dark-02)]  focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>i]:rotate-180 focus:text-[var(--color-brand-primary-pure)]',
          disabled && 'text-[var(--color-base-light-03)]',
          className,
        )}
        {...props}
      >
        <div className='flex flex-col text-left'>
          <span className='text-[24px] font-medium'>{children}</span>
          {subtitle && (
            <span className='text-[17px] font-semibold leading-tight'>
              {subtitle}
            </span>
          )}
        </div>
        <i className='fa-regular fa-angle-down fa-xs pointer-events-none size-4 shrink-0 translate-y-4 transition-transform duration-200   '></i>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot='accordion-content'
      className='data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm text-muted-foreground'
      {...props}
    >
      <div className={cn('pt-0 pb-4', className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export const Accordion = ({
  type = 'single',
  items,
  className,
}: {
  type?: 'single' | 'multiple';
  items: {
    value: string;
    headline: string;
    subtitle?: string;
    disabled?: boolean;
    content: React.ReactNode;
  }[];
  className?: string;
}) => {
  return (
    <RadixAccordion type={type} collapsible className={cn('w-full', className)}>
      {items.map(item => (
        <AccordionItem
          key={item.value}
          value={item.value}
          disabled={!!item.disabled}
        >
          <AccordionTrigger
            subtitle={item.subtitle || ''}
            disabled={!!item.disabled}
            className='text-[24px] font-medium'
          >
            {item.headline}
          </AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </RadixAccordion>
  );
};
