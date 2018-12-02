import React from 'react';

const Focus = ({
    showFocusQuestion,
    onChange,
    value,
    onSubmit,
    showFocusTitle,
    focusButtonClick,
    focusBoxChecked,
    isComplete,
}) => {
    const checkboxButtonClass = (isChecked) => {
        if (isChecked) {
            return 'far fa-check-square';
        } else {
            return 'far fa-square';
        }
    };
    //{ onChange} is equivalent to const onChange = props.onChange, deconstructing, hence when we want to refer to props.onChange, we only need to type in onChange.
    return (
        <div>
            {showFocusQuestion ? (
                <h1 className="focusTitle">What is your main focus today?</h1>
            ) : (
                null
            )}
            <form onSubmit={onSubmit} action="" className="focusForm">
                <label htmlFor="focusCheckbox" />

                <label htmlFor="focus" />
                {showFocusTitle ? (
                    <div className="focusTitleWrapper">
                        <button
                            className="focusCheckboxButton btns"
                            onClick={focusBoxChecked}
                            type="checkbox"
                            id="focusCheckbox"
                        >
                            <i className={checkboxButtonClass(isComplete)} />
                        </button>
                        <h2 className={isComplete ? 'strikedOut' : ''}>
                            {value}
                        </h2>

                        <button
                            className="deleteFocusTitleBtn btns"
                            onClick={focusButtonClick}
                        >
                            <i className="fas fa-times" />
                        </button>
                    </div>
                ) : (
                    <input
                        required
                        className="focusTitleInput"
                        value={value}
                        onChange={onChange}
                        id="focus"
                        type="text"
                    />
                )}
                {isComplete ? (
                    <div>
                        <p className="congratsMsg tada">Way to Go!</p>
                    </div>
                ) : null}
            </form>
        </div>
    );
};

export default Focus;

//
