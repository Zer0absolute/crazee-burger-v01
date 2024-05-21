import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';

export default function CassinoEffect({ count }) {
    return (
        <TransitionGroup component={CassinoEffectStyled}>
            <CSSTransition classNames="count-animated" timeout={300} key={count}>
                <span>
                    {count}
                </span>
            </CSSTransition>
        </TransitionGroup>
    );
}

const CassinoEffectStyled = styled.div`
    /* border: 1px solid red; */
    position: relative;
    overflow: hidden;

    span {
        display: inline-block;
    }

    /* MOUNTING */
    .count-animated-enter {
        transform: translateY(100%);
    }

    .count-animated-enter-active {
        transform: translateY(0%);
        transition: transform 300ms;
    }

    .count-animated-enter-done {
        transform: translateY(0%);
    }

    /* UNMOUNTING */
    .count-animated-exit {
        transform: translateY(0%);
        position: absolute;
        bottom: 0;
        right: 0;
    }

    .count-animated-exit-active {
        transform: translateY(-100%);
        transition: transform 300ms;
    }
`;