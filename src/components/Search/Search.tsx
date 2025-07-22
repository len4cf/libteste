import { cn } from '@/utils';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

interface SearchProps {
  barColor?: 'white' | 'grey';
  placeholder?: string;
  searchTerm: string;
  onSearchChange: (value: string) => void;
  className?: string;
  border?: boolean;
}

export const Search = ({
  barColor,
  placeholder,
  searchTerm,
  onSearchChange,
  className,
  border = false,
}: SearchProps) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={cn('relative w-full group ', className)}>
      {!isFocused && !searchTerm && (
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className='absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-brand-secondary-cold-pure)] w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity'
        />
        // <i className='fa-solid fa-magnifying-glass absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-brand-secondary-cold-pure)] w-4 h-4 opacity-40 group-hover:opacity-100 transition-opacity'></i>
      )}
      <input
        type='text'
        placeholder={!isFocused && !searchTerm ? placeholder || 'Procurar' : ''}
        autoComplete='off'
        className={`w-full ${isFocused || searchTerm ? 'pl-4' : 'pl-12'} ${
          barColor === 'white'
            ? 'bg-[var(--color-base-light-pure)]'
            : 'bg-[var(--color-base-light-01)]'
        }  group-hover:placeholder:text-[var(--color-base-dark-02)] ${
          border
            ? 'border border-[var(--color-base-light-03)]'
            : 'focus:border-none'
        } group-hover:placeholder:transition-colors pr-4 py-3 rounded-md focus:outline-none placeholder:text-[var(--color-base-dark-03)] caret-[var(--color-brand-secondary-cold-pure)] `}
        value={searchTerm}
        onChange={e => onSearchChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};
