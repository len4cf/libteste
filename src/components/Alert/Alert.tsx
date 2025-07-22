import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck,
  faCircleInfo,
  faCircleXmark,
  faTriangleExclamation,
} from '@fortawesome/free-solid-svg-icons';

const alertVariants = cva(
  'relative w-full rounded-lg border-none px-4 py-3 shadow-lg',
  {
    variants: {
      variant: {
        success: '',
        danger: '',
        warning: '',
        info: '',
      },
    },
    defaultVariants: {
      variant: 'success',
    },
  },
);

type AlertVariant = 'success' | 'danger' | 'warning' | 'info';
type ColorType = 'white' | 'light' | 'dark';

const iconVariant: Record<Exclude<AlertVariant, 'default'>, React.ReactNode> = {
  success: (
    <FontAwesomeIcon
      icon={faCircleCheck}
      className='text-[var(--color-feedback-success-dark)] fa-lg'
    />
  ),
  danger: (
    <FontAwesomeIcon
      icon={faCircleXmark}
      className='text-[var(--color-feedback-warning-dark)] fa-lg'
    />
  ),
  warning: (
    <FontAwesomeIcon
      icon={faTriangleExclamation}
      className='text-[var(--color-feedback-alert-darkest)] fa-lg'
    />
  ),
  info: (
    <FontAwesomeIcon
      icon={faCircleInfo}
      className='text-[var(--color-brand-secondary-cold-dark)] fa-lg'
    />
  ),
};

const colorStyles: Record<ColorType, string> = {
  white: 'bg-white',
  light: 'bg-[var(--color-feedback-success-lightest)]',
  dark: 'bg-[var(--color-feedback-success-darkest)]',
};

const getTextColor = (color?: ColorType) =>
  color === 'dark'
    ? 'text-[var(--color-base-light-pure)]'
    : 'text-[var(--color-base-dark-pure)]';

const getLinkColor = (color?: ColorType) =>
  color === 'dark'
    ? 'text-[var(--color-base-light-pure)]'
    : 'text-[var(--color-brand-primary-pure)]';

type AlertProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof alertVariants> & {
    title?: string;
    description?: string;
    icon?: React.ReactNode;
    color?: ColorType;
    linkText?: string;
    href?: string;
    close?: boolean;
    variant?: AlertVariant;
  };

export function Alert({
  title,
  description,
  icon,
  className,
  variant = 'success',
  color,
  linkText,
  href = '#',
  close = true,
  ...props
}: AlertProps) {
  const [visible, setVisible] = React.useState(true);
  if (!visible) return null;

  const computedIcon = icon ?? iconVariant[variant ?? 'success'];

  return (
    <div
      data-slot='alert'
      role='alert'
      className={cn(
        alertVariants({ variant }),
        color ? colorStyles[color] : '',
        className,
      )}
      {...props}
    >
      <div className='flex justify-between items-start'>
        {computedIcon && <span className='mr-3'>{computedIcon}</span>}

        <div className='flex flex-col flex-1'>
          {(title || linkText) && (
            <div className='flex items-center gap-3'>
              {title && (
                <div
                  data-slot='alert-title'
                  className={cn(
                    'font-semibold tracking-tight leading-tight',
                    getTextColor(color),
                  )}
                >
                  {title}
                </div>
              )}

              {linkText && (
                <a
                  href={href}
                  className={cn(
                    'text-sm font-medium underline underline-offset-2 hover:opacity-90',
                    getLinkColor(color),
                  )}
                >
                  {linkText}
                </a>
              )}
            </div>
          )}

          {description && (
            <div
              data-slot='alert-description'
              className={cn(
                'mt-3 text-sm [&_p]:leading-relaxed',
                getTextColor(color),
              )}
            >
              {description}
            </div>
          )}
        </div>

        {close && (
          <button
            onClick={() => setVisible(false)}
            className='ml-4 text-muted-foreground hover:text-foreground transition'
            aria-label='Fechar alerta'
          >
            <i className='fa-solid fa-xmark'></i>
          </button>
        )}
      </div>
    </div>
  );
}
