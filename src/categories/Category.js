import React, { Component } from 'react';

const Category = ({
    value,
    onTitleChange,
    onTitleSubmit,
    showTitle,
    catKey,
    onCategoryButtonClick,
    onCategoryBoxButtonClick,
    onCategoryCheckBoxClick,
    categoryBoxChecked,
    index,
}) => {
    const handleInputChange = (e) => {
        onTitleChange(catKey, e.target.value);
    };

    const handleDeleteButton = () => {
        onCategoryButtonClick(catKey);
    };

    const handleSubmitTitle = (e) => {
        e.preventDefault();
        onTitleSubmit(catKey);
    };

    const handleDeleteBox = () => {
        onCategoryBoxButtonClick(catKey);
    };

    const handleCheckBox = () => {
        onCategoryCheckBoxClick(catKey);
    };

    const getColorClassName = (catIndex) => {
        const numColors = 4;
        const colorIndex = catIndex % numColors;
        const className = 'catBoxColor' + colorIndex;

        return className;
    };

    return (
        <div className={'categoryBoxWrapper ' + getColorClassName(index)}>
            <div className="deleteBoxWrapper">
                <button className="btns deleteBox" onClick={handleDeleteBox}>
                    <i className="fas fa-trash-alt" />
                </button>
            </div>
            <div className="categoryBox">
                <form onSubmit={handleSubmitTitle} action="">
                    

                    {showTitle ? (
                        <div className="catTitleWrapper">
                            {categoryBoxChecked ? (
                                <button
                                    onClick={handleCheckBox}
                                    className="catCheckBox btns"
                                >
                                    {' '}
                                    <i className="far fa-check-square" />
                                </button>
                            ) : (
                                <button
                                    onClick={handleCheckBox}
                                    className="catCheckBox btns"
                                >
                                    <i className="far fa-square" />
                                </button>
                            )}
                            <h2
                                className={
                                    'catTitle ' +
                                    (categoryBoxChecked ? 'strikedOut' : '')
                                }
                            >
                                {value}
                            </h2>
                            <button
                                className="deleteCatTitleBtn btns"
                                onClick={handleDeleteButton}
                            >
                                <i className="fas fa-times" />
                            </button>
                        </div>
                    ) : (
                        <input
                            required
                            className="catTitleInput"
                            placeholder="New Todo"
                            onChange={handleInputChange}
                            id="title"
                            type="text"
                            value={value}
                            maxlength={300}
                        />
                    )}

                    <label htmlFor="title" />
                </form>
            </div>
        </div>
    );
};

export default Category;
