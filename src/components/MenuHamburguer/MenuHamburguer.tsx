import React, { useState } from 'react';
import { cn } from '@/utils';

interface MenuHamburguerProps {
  label?: string;
  children: React.ReactNode;
  className?: string;
  logo?: React.ReactNode;
  variant?: 'puc' | 'dark' | 'light';
  position?: 'left' | 'right';
  showWebAlunoIcon?: boolean;
}

export const MenuHamburguer = ({
  label = 'Menu',
  children,
  className,
  logo,
  variant = 'puc',
  position = 'left',
  showWebAlunoIcon = false,
}: MenuHamburguerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const iconAndLabelColor =
    variant === 'light' ? 'text-[#8a0538]' : 'text-white';
  const webAlunoColor = variant === 'light' ? 'text-[#8a0538]' : 'text-white';

  const toggleMenu = () => setIsOpen(!isOpen);

  const containerBaseStyles = cn(
    'w-full h-14 flex items-center px-4 relative',
    'justify-between',
  );

  const variantStyles = {
    puc: 'bg-[#8A0538] text[#F0F2F2]',
    dark: 'bg-[#1E1E1E] text[#F0F2F2]',
    light: 'bg-[#F0F2F2] text-[var(--color-base-dark-01)]',
  };

  const buttonBaseStyles =
    'flex items-center space-x-2 p-2 rounded-md focus:outline-none focus:ring-2';
  const buttonHoverFocusStyles = {
    puc: 'hover:bg-[var(--color-brand-primary-dark)] focus:ring-[var(--color-brand-primary-dark)]',
    dark: 'hover:bg-gray-700 focus:ring-gray-600',
    light: 'hover:bg-gray-100 focus:ring-blue-500',
  };

  const HamburguerButton = (
    <div className='flex items-center relative'>
      <button
        onClick={toggleMenu}
        aria-expanded={isOpen}
        aria-controls='hamburguer-menu-content'
        className={cn(buttonBaseStyles, buttonHoverFocusStyles[variant])}
      >
        <i
          className={cn('fa-sharp fa-regular fa-bars fa-xl', iconAndLabelColor)}
        ></i>
        {label && (
          <span
            className={cn(
              'font-source text-base leading-tight font-semibold',
              iconAndLabelColor,
            )}
          >
            {label}
          </span>
        )}
      </button>

      <div
        id='hamburguer-menu-content'
        role='menu'
        className={cn(
          'absolute top-full mt-2 bg-white border border-gray-200 rounded-md shadow-lg z-20',
          'transition-all duration-300 ease-in-out',
          isOpen
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible -translate-y-2',
          'min-w-[180px] p-2',
          position === 'right' ? 'right-0' : 'left-0',
        )}
      >
        {children}
      </div>
    </div>
  );

  const WebAlunoIcon = showWebAlunoIcon && (
    <div className='flex items-center space-x-2 ml-4'>
      <i className={cn('fa-regular  fa-message', webAlunoColor)}></i>
      <span
        className={cn(
          'text-base font-sans leading-tight font-semibold text-[16px]',
          webAlunoColor,
        )}
      >
        WebAluno
      </span>
    </div>
  );

  return (
    <div className={cn(containerBaseStyles, variantStyles[variant], className)}>
      {/* LADO ESQUERDO */}
      <div className='flex items-center gap-4'>
        {position === 'left' && HamburguerButton}
        {position === 'right' && (
          <>
            {WebAlunoIcon}
            {logo && <div>{logo}</div>}
          </>
        )}
      </div>

      {/* LADO DIREITO */}
      <div className='flex items-center gap-4'>
        {position === 'left' && (
          <>
            {WebAlunoIcon}
            {logo && <div>{logo}</div>}
          </>
        )}
        {position === 'right' && HamburguerButton}
      </div>
    </div>
  );
};
