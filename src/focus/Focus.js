import React from 'react';

const Focus = ({
    onChange,
    value,
    onSubmit,
    showFocusTitle,
    focusButtonClick,
    focusBoxChecked,
    isComplete,
}) => {
    //{ onChange} is equivalent to const onChange = props.onChange, deconstructing, hence when we want to refer to props.onChange, we only need to type in onChange.
    return (
        <div>
            <h1 className="focusTitle">What is your main focus today?</h1>
            <form onSubmit={onSubmit} action="" className="focusForm">
                <label htmlFor="focusCheckbox" />
                {isComplete ? <p>Way to Go!</p> : null}

                <label htmlFor="focus" />
                {showFocusTitle ? (
                    [
                        <input
                            onClick={focusBoxChecked}
                            type="checkbox"
                            id="focusCheckbox"
                        />,
                        <h2 className={isComplete ? 'strikedOut' : ''}>
                            {value}
                        </h2>,
                        <button onClick={focusButtonClick}>
                            {' '}
                            <i className="fas fa-times" />
                        </button>,
                    ]
                ) : (
                    <input
                        className="focusTitleInput"
                        value={value}
                        onChange={onChange}
                        id="focus"
                        type="text"
                    />
                )}
            </form>
        </div>
    );
};

export default Focus;

//
