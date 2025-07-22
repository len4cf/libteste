import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faPaperclip, faXmark} from "@fortawesome/free-solid-svg-icons";

const attachmentVariants = cva(
  'inline-flex h-[44px] px-4 py-2 items-center gap-4 shrink-0 rounded-lg ',
  {
    variants: {
      variant: {
        default: 'border border-[#F0F2F2] bg-white',
        hover: 'border border-violet-400 bg-violet-50',
        loading: 'p-0 border border-transparent bg-transparent',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

type AttachmentProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof attachmentVariants> & {
    fileName: string;
    fileSize: string;
    onRemove?: () => void;
  };

/** Component attachment
 * @example
 * <Attachment fileName="example.txt" fileSize="1.2 MB" variant="default" />
 *
 */

export const Attachment = React.forwardRef<HTMLDivElement, AttachmentProps>(
  ({ className, variant, fileName, fileSize, onRemove, ...props }, ref) => {
    if (variant === 'loading') {
      return (
        <div
          ref={ref}
          className={cn(
            'w-full max-w-[400px] rounded-md overflow-hidden',
            className,
          )}
          {...props}
        >
          <div className='h-1 w-full bg-gray-100'>
            <div className='h-full w-1/3 bg-[var(--color-brand-secondary-cold-pure)] animate-pulse' />
          </div>
        </div>
      );
    }

    return (
      <div
        // div grandão que envolve tudo
        ref={ref}
        className={cn(attachmentVariants({ variant }), className)}
        {...props}
      >
        <div className='flex items-center justify-bewtween gap-4 py-1'>
          <i className='fa-regular fa-paperclip-vertical text-[var(--color-brand-secondary-cold-pure)] fa-lg'></i>
          <span className='text-[15px] leading-[156%] font-normal text-[var(--Neutral-Colors-dark-02)] font-[SourceSansPro]'>
            {fileName}
          </span>
          <span className='text-[13px] leading-[124%] font-normal text-[var(--Neutral-Colors-dark-03)] font-[SourceSansPro]'>
            {fileSize}
          </span>
        </div>

        <div className='flex items-center gap-4'>
          <div
            className={cn(
              'w-px h-6',
              variant === 'hover' ? 'bg-violet-400' : 'bg-[#E4E4E4]',
            )}
          />
          <button
            onClick={onRemove}
            className='flex items-center justify-center w-[24px] h-[24px]'
          >
            <i className='fa-regular fa-xmark text-[20px] text-[var(--color-brand-primary-pure)]' />
          </button>
        </div>
      </div>
    );
  },
);

Attachment.displayName = 'Attachment';
