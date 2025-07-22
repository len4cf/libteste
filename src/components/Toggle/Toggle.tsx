import { useState } from 'react';

interface ToggleProps {
  size?: 'small' | 'medium' | 'large';
  toggleText?: string;
}

const sizeClasses = {
  small: {
    wrapper: 'h-4 w-8',
    circle: {
      base: 'h-3.5 w-3.5',
      on: 'translate-x-4',
      off: 'translate-x-0.75',
    },
    text: 'text-sm',
  },
  medium: {
    wrapper: 'h-5 w-10',
    circle: {
      base: 'h-4 w-4',
      on: 'translate-x-5.5',
      off: 'translate-x-0.75',
    },
    text: 'text-md',
  },
  large: {
    wrapper: 'h-7 w-14',
    circle: {
      base: 'h-6 w-6',
      on: 'translate-x-7.5',
      off: 'translate-x-0.75',
    },
    text: 'text-lg',
  },
};

export const Toggle = ({ size = 'medium', toggleText }: ToggleProps) => {
  const [enabled, setEnabled] = useState(false);
  const styles = sizeClasses[size];

  return (
    <div className='flex items-center gap-2'>
      <button
        onClick={() => setEnabled(!enabled)}
        className={`relative inline-flex items-center rounded-full transition-colors duration-300 focus:outline-none
        ${styles.wrapper}
        ${
          enabled
            ? 'bg-[var(--color-brand-secondary-cold-dark)]'
            : 'bg-[var(--color-base-light-03)]'
        }`}
      >
        <span
          className={`inline-block transform rounded-full bg-white shadow transition duration-300
          ${styles.circle.base}
          ${enabled ? styles.circle.on : styles.circle.off}`}
        />
      </button>

      {toggleText && (
        <span className={`${styles.text} text-gray-700`}>{toggleText}</span>
      )}
    </div>
  );
};
