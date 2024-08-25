import React from 'react';
import styles from './button-flat.module.css';

interface ButtonFlatProps {
    children: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ButtonFlat({ children, onClick }: ButtonFlatProps): JSX.Element {
    return (
        <button type="button" className={styles['button-flat-style']} onClick={onClick}>
            {children}
        </button>
    );
}
