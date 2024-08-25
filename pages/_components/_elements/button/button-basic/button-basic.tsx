import React from 'react';
import styles from '@/pages/_components/_elements/Button/button-basic/button-basic.module.css';

interface ButtonBasicProps {
    children: string;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ButtonBasic({ children, onClick }: ButtonBasicProps): JSX.Element {
    return (
        <button type="button" className={styles['button-basic-style']} onClick={onClick}>
            {children}
        </button>
    );
}
