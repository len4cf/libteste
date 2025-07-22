import clsx from 'clsx'; // instale com: npm i clsx

interface TagProps {
  style: 'category' | 'label';
  icon?: React.ReactNode;
  label: string;
  color: 'bordo' | 'purple';
  disabled?: boolean;
  isSelected?: boolean;
  onClick?: () => void;
}

export const Tag = ({
  style,
  icon,
  label,
  color,
  disabled = false,
  isSelected = false,
  onClick,
}: TagProps) => {
  const isInteractive = typeof onClick === 'function';
  const TagElement = isInteractive ? 'button' : 'div';

  const selectedClass = isSelected
    ? color === 'purple'
      ? 'bg-[var(--color-brand-secondary-cold-pure)] text-[var(--color-base-light-03)]'
      : 'bg-[var(--color-brand-primary-pure)] text-[var(--color-base-light-03)]'
    : '';

  const borderColor =
    color === 'purple'
      ? 'border-[var(--color-brand-secondary-cold-pure)] focus:border-[var(--color-base-dark-02)]'
      : 'border-[var(--color-brand-primary-pure)] focus:border-[var(--color-base-dark-02)]';

  const commonClasses = clsx(
    'inline-block px-4 py-1 text-sm border-2 font-source',
    style === 'category' && ' w-[17rem] h-[11rem] text-[17px]',
    style === 'label' && 'rounded-full',
    'text-[var(--color-base-dark-02)] hover:bg-[var(--color-base-light-03)] hover:text-[var(--color-base-dark-02)]',
    borderColor,
    selectedClass,
    disabled &&
      'cursor-not-allowed disabled:border-[var(--color-base-light-03)] disabled:text-[var(--color-base-light-03)] disabled:bg-transparent disabled:hover:bg-transparent',
  );

  return (
    <TagElement
      onClick={onClick}
      className={commonClasses}
      disabled={disabled}
      type={isInteractive ? 'button' : undefined}
      aria-pressed={isSelected}
    >
      {style === 'category' && icon ? (
        <span className='inline-block mr-2'>{icon}</span>
      ) : (
        ''
      )}
      {label}
    </TagElement>
  );
};
