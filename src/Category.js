import React from 'react';
import './Focus.scss';

const Category = ({ value, onChange, onSubmit, showTitle }) => {
    return (
        <div className="newCategoryBox">
            <form onSubmit={onSubmit} action="">
                <label htmlFor="title" />

                {showTitle ? (
                    <div>
                        <h2>{value}</h2>
                        <ul>
                            <button>new task</button>
                            <li>sudo li </li>
                        </ul>
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
