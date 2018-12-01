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

    return (
        <div className="categoryBoxWrapper">
            <div className="deleteBoxWrapper">
                <button className="btns deleteBox" onClick={handleDeleteBox}>
                    <i className="fas fa-trash-alt" />
                </button>
            </div>
            <div className="categoryBox">
                <form onSubmit={handleSubmitTitle} action="">
                    <label htmlFor="title" />

                    {showTitle ? (
                        <div>
                            <div className="catTitleWrapper">
                                <button
                                    onClick={onCategoryCheckBoxClick}
                                    className="catCheckBox btns"
                                >
                                    <i className="far fa-square" />
                                </button>
                                <h2 className="catTitle">{value}</h2>
                                <button
                                    className="deleteCatTitleBtn btns"
                                    onClick={handleDeleteButton}
                                >
                                    <i className="fas fa-times" />
                                </button>
                            </div>
                        </div>
                    ) : (
                        <input
                            className="catTitleInput"
                            placeholder="New Todo"
                            onChange={handleInputChange}
                            id="title"
                            type="text"
                            value={value}
                        />
                    )}
                </form>
            </div>
        </div>
    );
};

export default Category;
