import styles from '@/pages/_components/_elements/input/input-checkbox/input-checkbox.module.css';

interface InputCheckboxProps {
    isChecked: boolean;
    onChange: () => void;
}

export default function InputCheckbox({ isChecked, onChange }: InputCheckboxProps) : JSX.Element {
    return (
        <label className={styles['checkbox-style']}>
            <input type="checkbox" className={styles['input-checkbox-style']} checked={isChecked} onChange={onChange} />
            <span className={styles.checkmark}></span>
        </label>
    );
}
