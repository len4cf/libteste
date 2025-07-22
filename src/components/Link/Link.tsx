import {
  faArrowLeft,
  faArrowRight,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface LinkProps {
  href: string;
  linkText: string;
  leftArrow?: boolean;
  rightArrow?: boolean;
  external?: boolean;
  size?: 'small' | 'regular' | 'large';
}

export const Link = ({
  href,
  linkText,
  leftArrow,
  rightArrow,
  external,
  size = 'regular',
}: LinkProps) => {
  const sizeVariants = {
    small: 'text-sm',
    regular: 'text-base',
    large: 'text-lg',
  };

  return (
    <a
      href={href}
      className={`text-[var(--color-brand-primary-pure)] font-semibold cursor-pointer group ${sizeVariants[size]} `}
    >
      <span className='flex items-center border-b border-transparent group-hover:border-current group-hover:text-[var(--color-brand-primary-light)] active:text-[var(--color-brand-primary-dark)] '>
        {leftArrow && (
          <FontAwesomeIcon
            icon={faArrowLeft}
            style={{
              marginRight: '4px',
              marginTop: size === 'large' || size === 'small' ? '4px' : '0px',
            }}
            className='fa-xs'
          />
        )}

        {external && (
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className='mr-1 mt-1 fa-xs'
          />
        )}

        {linkText}

        {external && (
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className='ml-1 mt-1 fa-xs'
          />
        )}

        {rightArrow && (
          <FontAwesomeIcon
            icon={faArrowRight}
            style={{
              marginLeft: '4px',
              marginTop: size === 'large' || size === 'small' ? '4px' : '0px',
            }}
            className='fa-xs'
          />
        )}
      </span>
    </a>
  );
};
