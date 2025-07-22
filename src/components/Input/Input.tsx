import React from 'react';
import { cn } from '@/utils';

interface InputProps {
  id?: string;
  value?: string;
  onChange?: (value: string) => void;
  onBlur?: () => void;
  label?: string;
  required?: boolean;
  validation?: 'error' | 'success';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
  helperText?: string;
  box?: boolean;
  maxLength?: number;
  showLengthCounter?: boolean;
  className?: string;
}

export const Input = ({
  id,
  value = '',
  onChange,
  onBlur,
  label = 'Label',
  icon,
  iconPosition = 'left',
  disabled,
  validation,
  helperText,
  box = false,
  maxLength = 100,
  showLengthCounter = true,
  className,
}: InputProps) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    onChange?.(e.target.value);
  };

  const baseBorderColor =
    validation === 'error'
      ? 'border-[var(--color-feedback-warning-pure)] focus:ring-[var(--color-feedback-warning-pure)] hover:border-[var(--color-feedback-warning-pure)]'
      : validation === 'success'
        ? 'border-[var(--color-feedback-success-dark)] focus:ring-[var(--color-feedback-success-dark)] hover:border-[var(--color-feedback-success-dark)]'
        : 'border-[var(--color-base-light-03)] focus:ring-var(--color-brand-secondary-cold-dark)';

  const inputBaseStyles = `border rounded-md bg-white font-source text-[15px] focus:outline-none focus:ring-1 focus:ring-[var(--color-brand-secondary-cold-pure)] hover:border-[var(--color-brand-secondary-cold-pure)] disabled:bg-[var(--color-base-light-02)] disabled:border-[var(--color-base-light-03)] disabled:cursor-not-allowed`;

  return (
    <>
      <div className={cn('relative w-1/2', className)}>
        {icon && (
          <div
            className={`absolute ${
              iconPosition === 'left' ? 'left-2 ' : 'right-2 '
            } top-1/2 -translate-y-1/2 text-gray-500 z-10 pointer-events-none `}
          >
            {icon}
          </div>
        )}

        {box ? (
          <div className='w-full'>
            <div className='relative'>
              <textarea
                id={id}
                value={value}
                disabled={disabled}
                onChange={handleChange}
                onBlur={onBlur}
                maxLength={maxLength}
                className={`peer ${inputBaseStyles} ${baseBorderColor} pt-2 pb-2 px-3 resize-none min-h-[100px] w-full [&::-webkit-scrollbar]:w-[12px]
                                [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-track]:my-[5px] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[var(--color-base-light-03)] [&::-webkit-scrollbar-thumb]:border-4 [&::-webkit-scrollbar-thumb]:border-white`}
                placeholder={label}
              />
            </div>
            <div
              className={`${
                helperText ? 'flex justify-between items-start' : ''
              }`}
            >
              {helperText && (
                <p className='mt-1 text-[var(--color-base-dark-03)] text-[13px] font-source'>
                  {helperText}
                </p>
              )}
              {showLengthCounter && maxLength > 0 && (
                <div className='mt-1 text-right'>
                  <p className='text-[var(--color-base-dark-03)] text-[13px] font-source'>
                    {value.length}/{maxLength}
                  </p>
                </div>
              )}
            </div>
          </div>
        ) : (
          <>
            <input
              type='text'
              id={id}
              value={value}
              disabled={disabled}
              maxLength={maxLength}
              onChange={handleChange}
              onBlur={onBlur}
              className={`${inputBaseStyles} ${baseBorderColor} peer pt-5 pb-1 w-full ${
                icon
                  ? iconPosition === 'left'
                    ? 'pl-8 pr-2'
                    : 'pl-4 pr-8'
                  : 'px-4'
              }`}
              placeholder=' '
            />
            <label
              htmlFor={id}
              className={`absolute ${
                icon
                  ? iconPosition === 'left'
                    ? 'left-8'
                    : 'left-4 right-8'
                  : 'left-4'
              } pointer-events-none transition-all duration-200 font-source
                                top-1/2 -translate-y-1/2
                                ${
                                  validation === 'error'
                                    ? 'text-[var(--color-feedback-warning-pure)] peer-focus:text-[var(--color-feedback-warning-pure)]'
                                    : validation === 'success'
                                      ? 'text-[var(--color-feedback-success-dark)] peer-focus:text-[var(--color-feedback-success-dark)]'
                                      : 'text-[var(--color-base-dark-03)]'
                                }
                                peer-placeholder-shown:top-1/2
                                peer-placeholder-shown:text-[15px]
                                peer-placeholder-shown:text-[var(--color-base-dark-03)]
                                peer-focus:top-3.5
                                peer-focus:text-[13px]
                                peer-focus:text-[var(--color-brand-secondary-cold-dark)]
                                peer-not-placeholder-shown:top-3.5
                                peer-not-placeholder-shown:text-sm`}
            >
              {label}
            </label>
          </>
        )}
      </div>
      {!box && helperText && (
        <p className='mt-1 text-[var(--color-base-dark-03)] text-[13px] font-source'>
          {helperText}
        </p>
      )}
    </>
  );
};
