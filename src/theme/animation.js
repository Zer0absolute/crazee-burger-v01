import { css } from "styled-components";

export const adminAnimation = css`
    .admin-appear {
        opacity: 0.1;
        transform: translateY(100%);
        
        &.admin-appear-active {
            opacity: 1;
            transform: translateY(0);
            transition: all 500ms;
        }
    }
`

export const basketAnimation = css`
    .slide-out-enter,
    .slide-out-appear {
        .card {
            transform: translateX(100px);
            opacity: 0%;
            transition: 300ms;
        }
    }

    .slide-out-enter-active,
    .slide-out-appear-active  {
        .card {
            transform: translateX(0px);
            opacity: 100%;
            transition: 300ms;
        }
    }

    .slide-out-exit {
        .card {
            transform: translateX(0px);
            opacity: 100%;
        }
    }

    .slide-out-exit-active {
        .card {
            transform: translateX(-100px);
            opacity: 0%;
            transition: 300ms;
        }
    }
`