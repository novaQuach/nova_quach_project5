import React, { Component } from 'react';

const Category = ({
    value,
    onTitleChange,
    onTitleSubmit,
    showTitle,
    catKey,
    onCategoryButtonClick,
    onCategoryBoxButtonClick,
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
        onCategoryBoxButtonClick();
    };

    return (
        <div className="categoryBoxWrapper">
            <div className="deleteBoxWrapper">
                <button className="btns deleteBox" onClick={handleDeleteBox}>
                    <i class="fas fa-trash-alt" />
                </button>
            </div>
            <div className="categoryBox">
                <form onSubmit={handleSubmitTitle} action="">
                    <label htmlFor="title" />

                    {showTitle ? (
                        <div>
                            <div className="deleteCatTitleWrapper">
                                <button
                                    className="deleteCatTitle btns"
                                    onClick={handleDeleteButton}
                                >
                                    <i class="fas fa-times" />
                                </button>
                                <h2 className="catTitle">{value}</h2>
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
