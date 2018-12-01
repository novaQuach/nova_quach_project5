import React, { Component } from 'react';
import deepmerge from 'deepmerge';
import Category from './Category';

class CategoryContainer extends Component {
    constructor() {
        super();
        this.state = {
            categories: {
                '0': {
                    title: 'Test',
                    // tasks: ['drink water', 'yoga'],
                    showTitle: true,
                },
                '1': {
                    title: 'Other Stuff',
                    // tasks: ['drink water', 'yoga'],
                    showTitle: true,
                },
            },
        };
    }

    handleTitleChange = (key, title) => {
        this.setState((currentState) => {
            return deepmerge(currentState, {
                categories: {
                    [key]: { title: title },
                },
            });
        });
    };

    submitTitle = (key) => {
        this.setState((currentState) => {
            return deepmerge(currentState, {
                categories: {
                    [key]: { showTitle: true },
                },
            });
        });
    };

    handleNewCategory = () => {
        this.setState((currentState) => {
            const newKey = Object.keys(currentState.categories).length;

            return deepmerge(currentState, {
                categories: {
                    [newKey]: {
                        showTitle: false,
                        title: '',
                    },
                },
            });
        });
    };

    deleteCategoryTitle = (key) => {
        this.setState((currentState) => {
            return deepmerge(currentState, {
                categories: {
                    [key]: { showTitle: false, title: '' },
                },
            });
        });
    };

    deleteCategoryBox = (key) => {
        console.log('this should delete the categoryBox');
    };
    render() {
        return (
            <div className="categoryWrapper">
                {Object.entries(this.state.categories).map((entry) => {
                    const [key, category] = entry;

                    return (
                        <Category
                            value={category.title}
                            onTitleChange={this.handleTitleChange}
                            onTitleSubmit={this.submitTitle}
                            showTitle={category.showTitle}
                            catKey={key}
                            onCategoryButtonClick={this.deleteCategoryTitle}
                            onCategoryBoxButtonClick={this.deleteCategoryBox}
                        />
                    );
                })}
                <button
                    className="btns newCatBtn"
                    onClick={this.handleNewCategory}
                >
                    <i class="fas fa-plus" />
                </button>
            </div>
        );
    }
}

export default CategoryContainer;
