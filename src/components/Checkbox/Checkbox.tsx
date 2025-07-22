import * as React from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

import { cn } from '@/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

interface CheckboxProps
  extends React.ComponentProps<typeof CheckboxPrimitive.Root> {
  label?: string;
  disabled?: boolean;
  id?: string;
  size?: 'small' | 'regular';
}

export function Checkbox({
  className,
  label = 'Teste',
  disabled,
  id = 'checkbox',
  size,
  ...props
}: CheckboxProps) {
  return (
    <div className='group flex items-center space-x-2'>
      <CheckboxPrimitive.Root
        id={id}
        data-slot='checkbox'
        className={cn(
          `peer dark:bg-input/30 data-[state=checked]:bg-[var(--color-brand-secondary-cold-pure)] disabled:bg-[var(--color-base-light-02)] disabled:border-0 data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-[var(--color-brand-secondary-cold-pure)] focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:opacity-50 border-[var(--color-base-dark-03)] border-2 ${
            size === 'small' ? 'w-[16px] h-[16px]' : 'w-[24px] h-[24px]'
          } group-hover:border-[var(--color-base-dark-02)] focus:border-[var(--color-brand-secondary-cold-pure)]`,
          className,
        )}
        disabled={disabled}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          data-slot='checkbox-indicator'
          className='flex items-center justify-center text-current transition-none'
        >
          <FontAwesomeIcon
            icon={faCheck}
            className={` ${size === 'small' ? 'fa-2xs' : ''} `}
          />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>

      {label && (
        <label
          htmlFor={id}
          className={`${
            size === 'small' ? 'text-[15px]' : 'text-[17px]'
          } font-source leading-none peer-disabled:cursor-not-allowed peer-data-[state=checked]:text-[var(--color-base-dark-01)]
                    text-[var(--color-base-dark-03)] transition-colors group-hover:text-[var(--color-base-dark-02)] focus:text-[var(--color-base-dark-03)] peer-disabled:text-[var(--color-base-light-02)] `}
        >
          {label}
        </label>
      )}
    </div>
  );
}
