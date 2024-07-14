import React from 'react';

type Props = {
  children: string;
  onClick: () => void;
}

export const LoadMoreBtn: React.FC<Props> = ({ children, onClick }) => {
  return (
    <>
      <button type="button" onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default LoadMoreBtn;
