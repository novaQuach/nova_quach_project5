import React, { Component } from 'react';
import deepmerge from 'deepmerge';
import Category from './Category';
import './Category.scss';

class CategoryContainer extends Component {
    constructor() {
        super();
        this.state = {
            categories: {
                '0': {
                    title: 'Test',
                    tasks: ['drink water', 'yoga'],
                    showTitle: true,
                },
                '1': {
                    title: 'Other Stuff',
                    tasks: ['drink water', 'yoga'],
                    showTitle: true,
                },
            },
        };
    }

    handleTitleChange = (key, title) => {
        this.setState({
            categories: {
                ...this.state.categories,
                [key]: { title: title },
            },
        });
    };

    submitTitle = (key) => {
        this.setState((state) => {
            return deepmerge(state, {
                categories: {
                    [key]: { showTitle: true },
                },
            });
        });
    };

    handleNewCategory = () => {
        console.log('this should lead to a new category');
    };

    deleteCategoryTitle = (key) => {
        this.setState((state) => {
            return deepmerge(state, {
                categories: {
                    [key]: { showTitle: false, title: '' },
                },
            });
        });
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
                            onButtonClick={this.deleteCategoryTitle}
                        />
                    );
                })}
                <button onClick={this.handleNewCategory}>New Category</button>
            </div>
        );
    }
}

export default CategoryContainer;
