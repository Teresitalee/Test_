import React, {useEffect} from 'react';
import {useStepper} from '../context';

export const StepperSteps = function({ children }) {
    const { currentStep, steps, setSteps } = useStepper();

    useEffect(() => {
        const stepperSteps = React.Children.toArray(children)
            .filter(step => {
                return step.type.name === 'StepperStep';
            })
            .map(step => step.props);
        setSteps(stepperSteps);
    }, [setSteps]);

    return (
        <div>
            {children &&
                React.Children.map(children, child => {
                    if (steps.length) {
                        return child.props.id === steps[currentStep].id
                            ? child
                            : null;
                    }
                })
            }
        </div>
    );
};

export const StepperStep = function({ children }) {
    return <>{children}</>;
};