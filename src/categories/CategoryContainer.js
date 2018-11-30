import React, { Component } from 'react';
import Category from './Category';
import './Category.scss';

class CategoryContainer extends Component {
    constructor() {
        super();
        this.state = {
            categories: [
                {
                    title: 'Fitness',
                    tasks: ['drink water', 'yoga'],
                    showTitle: true,
                },
                {
                    title: 'Other Stuff',
                    tasks: ['drink water', 'yoga'],
                    showTitle: true,
                },
            ],
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ showTitle: true });
    };

    handleNewCategory = () => {
        console.log('this should lead to a new category');
    };

    render() {
        return (
            <div>
                {this.state.categories.map((category) => {
                    return (
                        <Category
                            value={category.title}
                            onChange={this.handleChange}
                            onSubmit={this.handleSubmit}
                            showTitle={category.showTitle}
                        />
                    );
                })}
                <button onClick={this.handleNewCategory}>New Category</button>
            </div>
        );
    }
}

export default CategoryContainer;
