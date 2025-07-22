interface DividerProps {
  vertical?: boolean;
  density?: '1px' | '2px' | '4px';
}

export const Divider = ({
  vertical = false,
  density = '1px',
}: DividerProps) => {
  const heightClass = {
    '1px': 'h-[1px]',
    '2px': 'h-[2px]',
    '4px': 'h-[4px]',
  }[density];

  return (
    <div
      className={`w-full ${
        vertical ? 'rotate-90' : ''
      } ${heightClass} bg-[var(--color-base-light-03)]`}
    />
  );
};
