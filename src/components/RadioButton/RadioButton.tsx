import * as React from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { CircleIcon } from 'lucide-react';
import { cn } from '@/utils';

interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}

interface RadioGroupFieldProps
  extends React.ComponentProps<typeof RadioGroupPrimitive.Root> {
  options: Option[];
}

export function RadioGroupField({
  options,
  disabled,
  ...props
}: RadioGroupFieldProps) {
  return (
    <RadioGroupPrimitive.Root
      data-slot='radio-group'
      className={cn('grid gap-3')}
      disabled={disabled}
      {...props}
    >
      {options.map(({ label, value, disabled: optionDisabled }) => {
        const isActuallyDisabled = disabled || optionDisabled;

        return (
          <div
            key={value}
            className={cn(
              'flex items-center space-x-2',
              isActuallyDisabled && 'cursor-not-allowed',
            )}
          >
            <RadioGroupPrimitive.Item
              value={value}
              disabled={isActuallyDisabled}
              className={`border-[var(--color-base-dark-03)] aria-selected:bg-red-500 border-2 hover:border-[var(--color-brand-secondary-cold-pure)] ${
                !isActuallyDisabled
                  ? 'data-[state=checked]:bg-[var(--color-brand-secondary-cold-pure)] data-[state=checked]:border-[var(--color-brand-secondary-cold-pure)]'
                  : ''
              } disabled:border-[var(--color-base-light-03)] text-primary focus-visible:border-ring focus-visible:ring-ring/50 focus:border-[var(--color-brand-secondary-cold-pure)] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] `}
            >
              <RadioGroupPrimitive.Indicator
                data-slot='radio-group-indicator'
                className='relative flex items-center justify-center'
              >
                <CircleIcon className='fill-white stroke-none absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2' />
              </RadioGroupPrimitive.Indicator>
            </RadioGroupPrimitive.Item>
            <span
              className={cn(
                'text-sm font-source text-[var(--color-base-dark-03)]',
                isActuallyDisabled && 'text-[var(--color-base-light-03)] ',
              )}
            >
              {label}
            </span>
          </div>
        );
      })}
    </RadioGroupPrimitive.Root>
  );
}
