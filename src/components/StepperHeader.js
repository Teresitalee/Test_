import styled from 'styled-components';

export const StyledStepperHeaderItem = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;

    .step-counter {
        position: relative;
        z-index: 5;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 22px;
        height: 22px;
        padding: 10px;
        border-radius: 50%;
        background: #ccc;
        margin-bottom: 6px;
    }

    .step-name {
        color: #E81E2B;
        font-size: 14px;
        position: relative;
        left: 63px;

        @media (max-width: 768px) {
            font-size: 9px;
            left: 0px;
        }
    }

    &::after {
        position: absolute;
        content: '';
        border-bottom: 2px solid #ccc;
        width: 100%;
        top: 11px;
        left: 50%;
        z-index: 2;
    }

    &.completed {
        .step-counter {
            // background-color: #4bb543;
            border: 2px solid #E81E2B;
        }
        &::before {
            position: absolute;
            content: '';
            border-bottom: 2px solid #E81E2B;
            width: 100%;
            top: 11px;
            left: -50%;
            z-index: 3;
        }
    }

    &:first-child {
        &::before {
            content: none;
        }
    }

    &:last-child {
        &::after {
            content: none;
        }
    }

    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

export const StyledStepperHeader = styled.div`
    margin-top: auto;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    width: 86%;
    margin: auto;
`;