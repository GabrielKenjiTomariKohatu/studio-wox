import React, { useEffect, useRef, useState } from 'react';
import Angle from '@/pages/assets/svg/angle.svg';
import styles from './drop-down.module.css';

interface DropDownProps {
    label: string;
    children: React.ReactNode;
}

export default function Dropdown({ label, children }: DropDownProps) : JSX.Element {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={`position-relative d-inline-block`} ref={dropdownRef}>
            <button onClick={toggleDropdown} className={`d-flex align-items-center ${styles['drop-down-button']}`}>
                <span className="mr-2">{label}</span>
                <Angle
                    className={styles['drop-down-icon']}
                    style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                />
            </button>

            {isOpen && <div className={`position-absolute px-3 py-4 ${styles['drop-down-menu']}`}>{children}</div>}
        </div>
    );
}
