import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils';

const copyVariants = cva(
  'inline-flex items-center gap-2 cursor-pointer select-none font-source font-semibold transition-colors ease-[cubic-bezier(0.48,0,0.8,1)] duration-300 px-4 py-2 rounded-lg w-[106px] h-[40px] focus-visible:border-2 focus-visible:border-[#0296FF] focus-visible:rounded-[8px] focus-visible:outline-none',
  {
    variants: {
      copyType: {
        // MUDANÇA AQUI: Ajuste do focus-visible
        default: 'text-[#9B3EFF] hover:text-[#4E008E] hover:bg-[#E7DFEE]',
        mobile: 'text-[#9B3EFF]',
        disabled:
          'text-[#BAB0C3] cursor-not-allowed opacity-100 pointer-events-none',
        success: 'text-[#078635]', // A cor verde de sucesso
      },
      noText: {
        true: 'p-2 w-auto bg-transparent hover:bg-[#E7DFEE]',
        false: '',
      },
    },
    defaultVariants: {
      copyType: 'default',
      noText: false,
    },
  },
);

interface CopyProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof copyVariants> {
  textToCopy: string;
  label?: string;
  icon?: React.ReactNode;
  noText?: boolean;
  disabled?: boolean;
}

export const Copy = React.forwardRef<HTMLSpanElement, CopyProps>(
  (
    {
      className,
      textToCopy,
      label = 'Copiar',
      icon = <i className='fa-regular fa-copy' />,
      noText = false,
      disabled = false,
      copyType = 'default',
      ...props
    },
    ref,
  ) => {
    const [copied, setCopied] = React.useState(false);
    const [isHovering, setIsHovering] = React.useState(false);
    const copyTimeoutRef = React.useRef<number | null>(null);

    React.useEffect(() => {
      return () => {
        if (copyTimeoutRef.current) {
          clearTimeout(copyTimeoutRef.current);
        }
      };
    }, []);

    const handleCopy = async (event: React.MouseEvent<HTMLSpanElement>) => {
      if (disabled) return;
      event.stopPropagation();

      try {
        await navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        setIsHovering(true);

        if (copyTimeoutRef.current) {
          clearTimeout(copyTimeoutRef.current);
        }

        copyTimeoutRef.current = setTimeout(() => {
          setCopied(false);
          setIsHovering(false);
        }, 2000);
      } catch (err) {
        console.error('Erro ao copiar', err);
      }
    };

    const currentState = disabled ? 'disabled' : copied ? 'success' : copyType;

    const displayedIcon = copied ? <i className='fa-solid fa-check' /> : icon;

    const displayedLabelText = copied ? 'Copiado' : label;
    const tooltipText = copied ? 'Copiado' : 'Copiar';

    const shouldShowTooltip = noText && (isHovering || copied);

    return (
      <span
        ref={ref}
        className='relative inline-block'
        onMouseEnter={() => !disabled && setIsHovering(true)}
        onMouseLeave={() => {
          if (!copied && !disabled) {
            setIsHovering(false);
          }
        }}
      >
        <span
          className={cn(
            copyVariants({ copyType: currentState, noText }),
            className,
          )}
          onClick={handleCopy}
          aria-disabled={disabled}
          role='button'
          tabIndex={disabled ? -1 : 0}
          {...props}
        >
          {displayedIcon}
          {!noText && (
            <span className='text-current'>{displayedLabelText}</span>
          )}
        </span>

        {shouldShowTooltip && !disabled && (
          <div
            className={cn(
              'absolute top-full left-1/2 mt-2 -translate-x-1/2 bg-black text-white text-xs shadow z-10 whitespace-nowrap text-center',
              'w-[78px] h-[56px] max-w-[336px] rounded-[16px] p-4 opacity-100',
              'transition-all duration-300 ease-out',
            )}
          >
            {tooltipText}
            <div className='absolute bottom-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-l-transparent border-r-transparent border-b-[6px] border-b-black' />
          </div>
        )}
      </span>
    );
  },
);
