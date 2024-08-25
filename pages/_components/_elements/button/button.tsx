import ButtonBasic from './button-basic/button-basic';
import ButtonFlat from './button-flat/button-flat';

interface ButtonProps {
    children: string;
    type: 'basic' | 'flat';
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({ type, children, onClick }: ButtonProps): JSX.Element {
    switch (type) {
        case 'basic':
            return <ButtonBasic onClick={onClick}>{children}</ButtonBasic>;
        case 'flat':
            return <ButtonFlat onClick={onClick}>{children}</ButtonFlat>;
    }
}
