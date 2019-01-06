import React from 'react';
//{ onChange} is equivalent to const onChange = props.onChange, deconstructing, hence when we want to refer to props.onChange, we only need to type in onChange.
const Focus = ({
    showFocusQuestion,
    onChange,
    value,
    onSubmit,
    showFocusTitle,
    focusButtonClick,
    focusBoxChecked,
    isComplete,
    userName,
}) => {
    const checkboxButtonClass = (isChecked) => {
        if (isChecked) {
            return 'far fa-check-square';
        } else {
            return 'far fa-square';
        }
    };

    const userNameDisplay = userName != null ? `, ${userName}` : '';

    return (
        <div>
            {showFocusQuestion ? (
                <h1 className="focusTitle">
                    What is your main focus today{userNameDisplay}?
                </h1>
            ) : null}
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
