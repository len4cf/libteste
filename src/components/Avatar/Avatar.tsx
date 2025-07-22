'use client';

import * as React from 'react';
import { Avatar as AvatarPrimitive } from 'radix-ui';
import { cn } from '@/utils';

function RadixAvatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot='avatar'
      className={cn(
        'relative flex size-8 shrink-0 overflow-hidden rounded-full',
        className,
      )}
      {...props}
    />
  );
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot='avatar-image'
      className={cn('aspect-square size-full', className)}
      {...props}
    />
  );
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot='avatar-fallback'
      className={cn(
        'bg-secondary flex size-full items-center justify-center rounded-[inherit] text-xs',
        className,
      )}
      {...props}
    />
  );
}

interface AvatarObject {
  src?: string;
  fallback?: string;
}

interface AvatarGroupTogetherProps {
  className?: string | undefined;
  size?: 'small' | 'regular' | 'large';
  numPeople?: number | undefined;
  avatarUrls: AvatarObject[];
}

const AvatarGroupTogether = ({
  numPeople,
  size = 'regular',
  className,
  avatarUrls,
}: AvatarGroupTogetherProps) => {
  const sizeAvatarClass = {
    small: 'h-9 w-9',
    regular: 'h-12 w-12',
    large: 'h-15 w-15',
  };

  const textSizeClass = {
    small: 'text-[13px]',
    regular: 'text-[15px]',
    large: 'text-[17px]',
  };

  return (
    <div className={cn('flex items-center', className)}>
      {avatarUrls.map(({ src, fallback }, index) => (
        <div
          key={`${src || fallback || 'avatar'}-${index}`}
          className='relative'
          style={{
            marginLeft: index > 0 ? '-12px' : '0',
            zIndex: avatarUrls.length - index,
          }}
        >
          <RadixAvatar
            className={`${sizeAvatarClass[size]} rounded-full border-2 border-white dark:border-gray-800`}
          >
            <AvatarImage
              src={src || '/placeholder.svg?height=40&width=40'}
              alt={`Avatar ${index + 1}`}
            />
            <AvatarFallback
              className={`bg-[var(--color-brand-primary-pure)] cursor-default text-white ${textSizeClass[size]}`}
            >
              {src ? '' : fallback || 'NA'}
            </AvatarFallback>
          </RadixAvatar>
        </div>
      ))}
      {numPeople && numPeople > 0 && (
        <div
          className='relative'
          style={{
            marginLeft: avatarUrls.length > 0 ? '-12px' : '0',
            zIndex: 0,
          }}
        >
          <div
            className={`flex ${sizeAvatarClass[size]} items-center justify-center rounded-full border-2 text-[var(--color-brand-primary-light)] border-[var(--color-brand-primary-light)] text-center ${textSizeClass[size]} font-bold`}
          >
            +{numPeople}
          </div>
        </div>
      )}
    </div>
  );
};

interface AvatarProps {
  className?: string;
  avatarUrl?: AvatarObject[];
  numPeople?: number;
  group?: 'together' | 'separate';
  notification?: boolean;
  logo?: boolean;
  fallback?: string;
  size?: 'small' | 'regular' | 'large';
}

export const Avatar = ({
  className,
  avatarUrl = [],
  numPeople,
  group,
  size = 'regular',
  notification = false,
  fallback = 'NA',
  logo = false,
}: AvatarProps) => {
  const sizeAvatarClass = {
    small: 'h-9 w-9',
    regular: 'h-12 w-12',
    large: 'h-15 w-15',
  };

  const textSizeClass = {
    small: 'text-[13px]',
    regular: 'text-[15px]',
    large: 'text-[17px]',
  };

  const notificationClass = {
    small: 'size-2 ',
    regular: 'size-3 ',
    large: 'size-3.5 ',
  };

  const baseAvatarClass = cn(
    ` ${sizeAvatarClass[size]} rounded-full border-2 border-white dark:border-gray-800 bg-white`,
    logo && ` bg-[var(--color-brand-primary-pure)] `,
    className,
  );

  if (logo) {
    return (
      <div className='relative inline-block'>
        <RadixAvatar
          className={cn(
            baseAvatarClass,
            'bg-[var(--color-brand-primary-pure)] hover:bg-[var(--color-brand-primary-light)] active:bg-[var(--color-brand-primary-dark)] cursor-default',
          )}
        >
          {/* <img src={logoOficial} /> */}
        </RadixAvatar>
        {notification && (
          <span
            className={`absolute rounded-full bg-red-500 border-1 border-white dark:border-gray-800 top-1 right-0.5 ${notificationClass[size]}`}
          />
        )}
      </div>
    );
  }

  if (group === 'together' && avatarUrl.length > 0) {
    return (
      <AvatarGroupTogether
        avatarUrls={avatarUrl}
        numPeople={numPeople}
        size={size}
        className={className}
      />
    );
  }

  if (group === 'separate' && avatarUrl.length > 0) {
    return (
      <div className={cn('flex gap-1', className)}>
        {avatarUrl.map(({ src, fallback: fallbackText }, index) => (
          <RadixAvatar
            key={`${src || fallbackText || 'avatar'}-${index}`}
            className={baseAvatarClass}
          >
            <AvatarImage
              src={src || '/placeholder.svg?height=40&width=40'}
              alt={`Avatar ${index + 1}`}
            />
            <AvatarFallback
              className={`${textSizeClass[size]} bg-[var(--color-brand-primary-pure)] hover:bg-[var(--color-brand-primary-light)] active:bg-[var(--color-brand-primary-dark)] cursor-default text-white`}
            >
              {fallbackText || fallback}
            </AvatarFallback>
          </RadixAvatar>
        ))}
      </div>
    );
  }

  const { src, fallback: fallbackText } = avatarUrl?.[0] || {};

  return (
    <div className='relative inline-block'>
      <RadixAvatar className={baseAvatarClass}>
        <img src={src} />
        <AvatarImage
          src={src || '/placeholder.svg?height=40&width=40'}
          alt='Avatar'
        />
        <AvatarFallback
          className={`${textSizeClass[size]} bg-[var(--color-brand-primary-pure)] hover:bg-[var(--color-brand-primary-light)] active:bg-[var(--color-brand-primary-dark)] cursor-default text-white`}
        >
          {fallbackText || fallback}
        </AvatarFallback>
      </RadixAvatar>
      {notification && (
        <span
          className={`absolute rounded-full bg-red-500 border-1 border-white dark:border-gray-800 top-1 right-0.5 ${notificationClass[size]}`}
        />
      )}
    </div>
  );
};
