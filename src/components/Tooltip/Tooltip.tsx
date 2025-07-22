'use client';

import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import type React from 'react';
import { cn } from '@/utils';

type TooltipPosition =
  | 'down-center'
  | 'down-left'
  | 'down-right'
  | 'up-center'
  | 'up-left'
  | 'up-right';

interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  position?: TooltipPosition;
  color?: 'black' | 'white';
  className?: string;
  delayDuration?: number;
}

const getRadixPosition = (position: TooltipPosition) => {
  switch (position) {
    case 'down-center':
      return { side: 'bottom' as const, align: 'center' as const };
    case 'down-left':
      return { side: 'bottom' as const, align: 'start' as const };
    case 'down-right':
      return { side: 'bottom' as const, align: 'end' as const };
    case 'up-center':
      return { side: 'top' as const, align: 'center' as const };
    case 'up-left':
      return { side: 'top' as const, align: 'start' as const };
    case 'up-right':
      return { side: 'top' as const, align: 'end' as const };
    default:
      return { side: 'bottom' as const, align: 'center' as const };
  }
};

const colorClass = {
  black: 'bg-[var(--color-base-dark-02)] text-white',
  white: 'bg-white text-[var(--color-base-dark-02)',
};

const getCustomArrowClasses = (
  position: TooltipPosition,
  color: 'black' | 'white',
) => {
  const baseArrow = 'absolute w-0 h-0 border-solid';

  const arrowColorDown = {
    black: 'border-b-[var(--color-base-dark-02)]',
    white: 'border-b-[var(--color-base-light-pure)]',
  };

  const arrowColorTop = {
    black: 'border-t-[var(--color-base-dark-02)]',
    white: 'border-t-[var(--color-base-light-pure)]',
  };

  switch (position) {
    case 'down-center':
      return `${baseArrow} border-l-[8px] border-r-[8px] border-b-[8px] border-l-transparent border-r-transparent ${arrowColorDown[color]} top-[-8px] left-1/2 transform -translate-x-1/2`;
    case 'down-left':
      return `${baseArrow} border-l-[8px] border-r-[8px] border-b-[8px] border-l-transparent border-r-transparent ${arrowColorDown[color]} top-[-8px] left-4`;
    case 'down-right':
      return `${baseArrow} border-l-[8px] border-r-[8px] border-b-[8px] border-l-transparent border-r-transparent ${arrowColorDown[color]} top-[-8px] right-4`;
    case 'up-center':
      return `${baseArrow} border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent ${arrowColorTop[color]} bottom-[-8px] left-1/2 transform -translate-x-1/2`;
    case 'up-left':
      return `${baseArrow} border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent ${arrowColorTop[color]} bottom-[-8px] left-4`;
    case 'up-right':
      return `${baseArrow} border-l-[8px] border-r-[8px] border-t-[8px] border-l-transparent border-r-transparent ${arrowColorTop[color]} bottom-[-8px] right-4`;
    default:
      return '';
  }
};

export function Tooltip({
  children,
  content,
  color = 'black',
  position = 'down-center',
  className = '',
  delayDuration = 400,
}: TooltipProps) {
  const { side, align } = getRadixPosition(position);

  return (
    <TooltipPrimitive.Provider delayDuration={delayDuration}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>
          <div className={cn('inline-block', className)}>{children}</div>
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side={side}
            align={align}
            sideOffset={12}
            className={cn(
              `z-50 overflow-visible rounded-lg ${colorClass[color]} px-3 py-2 text-sm shadow-lg relative`,
              'animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
              'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
              'max-w-xs',
            )}
          >
            <div className={getCustomArrowClasses(position, color)} />
            {content}
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}
