import { useReducer, useEffect } from "react";

export function useToggle(options = [false, true]) {
    const optionsArray = Array.isArray(options) && options.length > 0 ? options : [false, true];

    const [state, dispatch] = useReducer(
        (state, action) => {
            if (action === undefined) {
                const currentIndex = state.index;
                const nextIndex = (currentIndex + 1) % state.options.length;
                return { ...state, index: nextIndex };
            }

            const newIndex = state.options.indexOf(action);
            if (newIndex !== -1) {
                return { ...state, index: newIndex };
            }

            return state;
        },
        {
            options: optionsArray,
            index: 0,
        }
    );

    useEffect(() => {
        dispatch(optionsArray[0]);
    }, [optionsArray]);

    const value = state.options[state.index];
    const toggle = (value: unknown) => dispatch(value);

    return [value, toggle];
}
