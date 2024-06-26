import { css, keyframes } from "styled-components";

export const fadeInFromRight = keyframes`
    0% {
        position: absolute;
        opacity: 0;
        z-index: -1;
        transform: translateX(100%);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
`

export const fadeInFromBottom = keyframes`
    0% {
        transform: translateY(100%);
        opacity: 0;
    }

    100% {
        transform: translateY(0%);
        opacity: 1;
    }
`

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

export const menuAnimation = css`
    .animation-menu-enter {
        opacity: 0.1;
        transform: translateX(-120px);

        &.animation-menu-enter-active {
            opacity: 1;
            transform: translateX(0);
            transition: all 300ms ease-out;
        }
    }
    
    .animation-menu-exit {
        opacity: 1;
        transform: translateY(0);

        &.animation-menu-exit-active {
            opacity: 0.1;
            transition: all 300ms ease-out;
        }
    }
`