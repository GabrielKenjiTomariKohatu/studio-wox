import InputCheckbox from '../_elements/input/input-checkbox/input-checkbox';

interface ItemFilterProps {
    name: string;
    isSelected: boolean;
    onToggle: (name: string) => void;
}

export default function ItemFilter({ name, isSelected, onToggle }: ItemFilterProps): JSX.Element {
    return (
        <div className="w-full d-flex justify-content-between align-items-center border-bottom">
            <span className="m-0 pb-2">{name}</span>
            <InputCheckbox isChecked={isSelected} onChange={() => onToggle(name)} />
        </div>
    );
}
