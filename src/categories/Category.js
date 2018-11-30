import React, { Component } from 'react';

const Category = ({ value, onChange, onSubmit, showTitle }) => {
    return (
        <div className="newCategoryBox">
            <form onSubmit={onSubmit} action="">
                <label htmlFor="title" />

                {showTitle ? (
                    <div>
                        <h2>{value}</h2>
                        <button onClick>new task</button>
                    </div>
                ) : (
                    <input
                        onChange={onChange}
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
