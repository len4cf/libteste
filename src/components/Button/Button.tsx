// components/ui/button.tsx
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center border whitespace-nowrap shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[background-color,border-color,color,box-shadow] overflow-hidden font-semibold font-source font-semibold',
  {
    variants: {
      buttonType: {
        default: '',
        secondary: '',
        tertiary: 'border-none',
      },
      theme: {
        base: '',
        onBrand: '',
      },
      size: {
        default: 'px-3.5 py-1.5 text-[15px]',
        small: 'px-3.5 py-1 text-[13px]',
        large: 'px-4 py-2 text-[17px]',
        iconCircle:
          'w-12 h-12 rounded-full flex items-center justify-center [&>svg]:size-5',
        iconRectangle:
          'w-12 h-12 !rounded-lg flex items-center justify-center [&>svg]:size-5',
      },
      iconPosition: {
        left: 'flex-row gap-2',
        right: 'flex-row-reverse gap-2',
      },
    },
    compoundVariants: [
      {
        buttonType: 'default',
        theme: 'base',
        class:
          'active:bg-[#570013] bg-[#8A0538] hover:bg-[#B20235] text-[#F0F2F2] rounded-[24px] ' +
          'disabled:text-[#787878] disabled:bg-[#E4E4E4] disabled:text-[#787878] disabled:font-semibold disabled:leading-none disabled:tracking-normal disabled:opacity-100',
      },
      {
        buttonType: 'secondary',
        theme: 'base',
        class:
          'border-[#8A0538] text-[#8A0538] rounded-sm rounded-[24px] bg-transparent ' +
          'hover:border-[#B20235] hover:text-[#B20235] ' +
          'active:border-[#570013] active:text-[#570013] active:shadow-inner ' +
          'disabled:text-[#787878] disabled:font-semibold disabled:leading-none disabled:tracking-normal ' +
          'disabled:opacity-100 disabled:border-[#787878] disabled:bg-transparent',
      },
      {
        buttonType: 'tertiary',
        theme: 'base',
        class:
          'text-[#8A0538] hover:text-[#B2025] active:text-[#570013] ' +
          'disabled:text-[#787878] disabled:font-semibold ',
      },

      //AQUI
      {
        buttonType: 'default',
        theme: 'onBrand',
        class:
          'bg-[#863BFF] text-[#FFFFFF] hover:bg-[#995aff] active:bg-[#6a19ec] rounded-[24px] ' +
          'disabled:text-[#787878] disabled:bg-[#E4E4E4] disabled:text-[#787878] disabled:font-semibold disabled:leading-none disabled:tracking-normal disabled:opacity-100',
      },
      {
        buttonType: 'secondary',
        theme: 'onBrand',
        class:
          'border-[#863BFF] text-[#863BFF] hover:border-[#995aff] hover:text-[#995aff] active:border-[#6a19ec] active:text-[#6a19ec] bg-transparent rounded-[24px] ' +
          'disabled:text-[#787878] disabled:font-semibold disabled:leading-none disabled:tracking-normal ' +
          'disabled:opacity-100 disabled:border-[#787878] disabled:bg-transparent',
      },
      {
        buttonType: 'tertiary',
        theme: 'onBrand',
        class:
          'text-[#863BFF] hover:text-[#995aff] active:text-[#6a19ec] ' +
          'disabled:text-[#787878] disabled:font-semibold ',
      },
    ],
    defaultVariants: {
      buttonType: 'default',
      theme: 'base',
      size: 'default',
    },
  },
);

export function Button({
  className,
  buttonType,
  theme,
  size,
  icon,
  iconPosition,
  asChild = false,
  label,
  children,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    icon?: React.ReactNode;
    label?: React.ReactNode;
  }) {
  const Comp = asChild ? Slot : 'button';

  const isIconOnlySize = size === 'iconCircle' || size === 'iconRectangle';

  return (
    <Comp
      data-slot='button'
      className={cn(
        buttonVariants({ buttonType, theme, size, iconPosition, className }),
        !isIconOnlySize && 'w-fit',
      )}
      {...props}
    >
      {icon && <span className='pointer-events-none'>{icon}</span>}
      {!isIconOnlySize && label}
      {!isIconOnlySize && children}
    </Comp>
  );
}
