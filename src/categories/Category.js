import React, { Component } from 'react';

const Category = ({
    value,
    onTitleChange,
    onTitleSubmit,
    showTitle,
    catKey,
    onButtonClick,
}) => {
    const handleInputChange = (e) => {
        onTitleChange(catKey, e.target.value);
    };

    const handleDeleteButton = () => {
        onButtonClick(catKey);
    };

    const handleSubmitTitle = (e) => {
        e.preventDefault();
        onTitleSubmit(catKey);
    };

    return (
        <div className="newCategoryBox">
            <form onSubmit={handleSubmitTitle} action="">
                <label htmlFor="title" />

                {showTitle ? (
                    <div>
                        <button onClick={handleDeleteButton}>x</button>
                        <h2>{value}</h2>
                        <button>new task</button>
                    </div>
                ) : (
                    <input
                        onChange={handleInputChange}
                        id="title"
                        type="text"
                        value={value}
                    />
                )}
            </form>
        </div>
    );
};

export default Category;
