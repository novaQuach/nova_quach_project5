import React from 'react';
import './Focus.scss';

const Focus = ({
    onChange,
    value,
    onSubmit,
    showInput,
    focusButtonClick,
    focusBoxChecked,
    focusInputStriked,
}) => {
    //{ onChange} is equivalent to const onChange = props.onChange, deconstructing, hence when we want to refer to props.onChange, we only need to type in onChange.
    return (
        <div>
            <h1>What is your main focus today?</h1>
            <form onSubmit={onSubmit} action="">
                <label htmlFor="focusCheckbox" />
                {focusInputStriked ? <p>Way to Go!</p> : null}
                <input
                    onClick={focusBoxChecked}
                    type="checkbox"
                    id="focusCheckbox"
                />

                <label htmlFor="focus" />
                {showInput ? (
                    <input
                        value={value}
                        onChange={onChange}
                        id="focus"
                        type="text"
                    />
                ) : (
                    [
                        <h2 className={focusInputStriked ? 'strikedOut' : null}>
                            {value}
                        </h2>,
                        <button onClick={focusButtonClick}>X</button>,
                    ]
                )}
            </form>
        </div>
    );
};

export default Focus;

//
