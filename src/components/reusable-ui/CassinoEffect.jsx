import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";

export default function CassinoEffect({ count, className }) {
    return (
        <TransitionGroup component={CassinoEffectStyled}>
            <CSSTransition classNames={"count-animeted"} timeout={5000} key={count}>
                <span className={className}>
                    {count}
                </span>
            </CSSTransition>
        </TransitionGroup>
    )
}

const CassinoEffectStyled = styled.div`
    border: 1px solid red;

    /* MOUNTING */
    .count-animated-enter {
    }

    .count-animated-enter-active {
        transition: 2s;
    }

    .count-animated-enter-done {
    }

        /* UNMOUNTING */
    .count-animated-exit {
    }

    .count-animated-exit-active {
        transition: 2s;
    }
`;