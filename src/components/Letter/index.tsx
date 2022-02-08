import style from "./index.module.css";

export type LetterState = 'default' | 'correct' | 'wrong';

interface LetterProps {
    letter: string;
    state: 'default' | 'correct' | 'wrong';
}

export const Letter: React.FC<LetterProps> = ({ letter, state = 'default' }) => {
    let stateClassName = '';

    switch (state) {
        case 'default':
            stateClassName = style.default;
            break;
        case 'correct':
            stateClassName = style.correct;
            break;
        case 'wrong':
            stateClassName = style.wrong;
            break;
        default:
            stateClassName = style.default;
    }

    return (
        <span className={`${stateClassName}`}>
            {letter}
        </span>
    );
};