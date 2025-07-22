import * as Select from '@radix-ui/react-select';
import { ChevronDownIcon } from 'lucide-react';
import { cn } from '@/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

interface Option {
  label: string;
  value: string;
}

interface DropdownProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  placeholder?: string;
  helperText?: string;
  errorText?: string;
  className?: string;
}

export const Dropdown = ({
  options,
  value,
  onChange,
  disabled,
  placeholder,
  helperText,
  errorText,
  className,
}: DropdownProps) => {
  const hasError = !!errorText;

  return (
    <div
      className={cn(
        'flex flex-col space-y-1 w-[12.5rem] font-source',
        className,
      )}
    >
      {placeholder && (
        <label className='text-sm text-[var(--color-base-dark-03)]'>
          {placeholder}
        </label>
      )}
      <Select.Root value={value} onValueChange={onChange}>
        <Select.Trigger
          className={cn(
            'group inline-flex items-center justify-between rounded-md border border-gray-300 bg-white px-[1rem] py-[.75rem] text-sm text-[var(--color-base-dark-03)] hover:text-[var(--color-base-dark-02)] data-[state=open]:text-[var(--color-brand-secondary-cold-dark)] shadow-sm transition-colors',
            'hover:border-[var(--color-brand-secondary-cold-light)] data-[state=open]:border-[var(--color-brand-secondary-cold-pure)] data-[state=open]:bg-[var(--color-brand-secondary-cold-lightest)]',
            disabled
              ? 'cursor-not-allowed text-[var(--color-base-dark-03)] hover:text-[var(--color-base-dark-03)] hover:border-gray-300 bg-[var(--color-base-light-03)]'
              : 'cursor-pointer',
            hasError
              ? 'border-[var(--color-feedback-warning-pure)] text-[var(--color-base-dark-02)] hover:border-[var(--color-feedback-warning-pure)]'
              : 'border-gray-300 text-[var(--color-base-dark-03)] hover:text-[var(--color-base-dark-02)]',
            hasError
              ? 'focus:border-[var(--color-feedback-warning-pure)] focus:ring-[var(--color-feedback-warning-pure)] '
              : 'hover:border-[var(--color-brand-secondary-cold-light)] data-[state=open]:border-[var(--color-brand-secondary-cold-pure)] data-[state=open]:bg-[var(--color-brand-secondary-cold-lightest)] data-[state=open]:text-[var(--color-brand-secondary-cold-dark)]',
          )}
          disabled={disabled}
        >
          <Select.Value placeholder='Selecione' />
          <Select.Icon
            className={`${
              disabled ? 'text-black' : ''
            } text-[var(--color-brand-secondary-warm-dark)] group-hover:text-[var(--color-base-dark-01)] group-data-[state=open]:text-[var(--color-brand-secondary-cold-pure)] ${
              hasError ? 'text-black' : ''
            } `}
          >
            <FontAwesomeIcon
              icon={faAngleDown}
              className='transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180'
            />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content
            className={cn(
              'z-50 overflow-hidden rounded-md border border-gray-200 bg-white shadow-lg animate-in fade-in font-source',
              'w-[var(--radix-select-trigger-width)]',
            )}
            position='popper'
          >
            <Select.Viewport className='max-h-48 sm:max-h-40 overflow-y-auto'>
              {options.map(option => (
                <Select.Item
                  key={option.value}
                  value={option.value}
                  className={cn(
                    'relative flex cursor-pointer select-none items-center px-3 py-2 text-sm text-[var(--color-base-dark-02)] outline-none transition hover:bg-[var(--color-base-light-01)]',
                  )}
                >
                  <Select.ItemText>{option.label}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.Viewport>
            <Select.ScrollDownButton className='flex items-center justify-center text-gray-500'>
              <ChevronDownIcon />
            </Select.ScrollDownButton>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
      {hasError ? (
        <span className='text-xs text-[var(--color-feedback-warning-pure)] mt-1'>
          {errorText}
        </span>
      ) : helperText ? (
        <span className='text-xs text-gray-500 mt-1'>{helperText}</span>
      ) : null}
    </div>
  );
};
