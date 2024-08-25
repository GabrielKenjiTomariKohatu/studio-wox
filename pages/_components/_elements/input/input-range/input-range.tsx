import React, { useState } from 'react';
import styles from './input-range.module.css';

interface InputRangeProps {
    maxRange: number;
    onMinChange: (value: number) => void;
    onMaxChange: (value: number) => void;
    minValue: number;
    maxValue: number;
}

export default function InputRange({ maxRange, onMinChange, onMaxChange, minValue, maxValue }: InputRangeProps) : JSX.Element {
    const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.min(Number(event.target.value), maxValue - 1);
        onMinChange(value);
    };

    const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(Number(event.target.value), minValue + 1);
        onMaxChange(value);
    };

    return (
        <div className={styles['space-range-input']}>
            <div className={styles['dual-range-container']}>
                <input type="range" min="0" max={maxRange} value={minValue} onChange={handleMinChange} className={`${styles['range-input']} ${styles['min-range']}`} />
                <input type="range" min="0" max={maxRange} value={maxValue} onChange={handleMaxChange} className={`${styles['range-input']} ${styles['max-range']}`} />
                <div
                    className={styles['range-highlight']}
                    style={{
                        left: `${(minValue / maxRange) * 100}%`,
                        width: `${((maxValue - minValue) / maxRange) * 100}%`
                    }}
                />
            </div>
            <div className={styles['range-labels']}>
                <span>{minValue} m²</span>
                <span>{maxValue} m²</span>
            </div>
        </div>
    );
}
