interface ModalProps {
  variants?: 'vertical' | 'horizontal';
  children?: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const modalStyles = {
  vertical: 'flex flex-col items-center mt-5 gap-3',
  horizontal: 'w-full mt-10',
};

export const Modal = ({
  variants = 'vertical',
  children,
  isOpen,
  onClose,
}: ModalProps) => {
  if (!isOpen) return null;

  const styles = modalStyles[variants];

  return (
    <>
      <div
        className='fixed inset-0 bg-transparent bg-opacity-50 z-40'
        onClick={onClose}
      />
      <div
        className={`fixed inset-0 z-50 bg-opacity-50 ${
          variants === 'vertical' ? 'w-[300px]' : ''
        }`}
      >
        <div className='bg-[var(--color-base-light-01)] rounded-lg shadow-lg p-6 max-w-md relative'>
          <button
            className='absolute top-2 right-2 text-gray-600 hover:text-[var(--color-brand-primary-pure)] hover:transition-colors ease-in-out cursor-pointer text-xl'
            onClick={onClose}
          >
            &times;
          </button>

          <div className={`${styles}`}>{children}</div>
          {/*
                    {variants === "vertical" && (
                        <div className="flex flex-col items-center mt-5 gap-3 ">
                            {children}
                        </div>
                    )}

                    {variants === "horizontal" && (
                        <div className="w-full mt-10 ">{children}</div>
                    )} */}
        </div>
      </div>
    </>
  );
};
