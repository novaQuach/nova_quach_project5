import React, { Component } from 'react';
import deepmerge from 'deepmerge';
import Category from './Category';
import firebase from '../firebase';

const categoriesRef = firebase.database().ref('/categories');

class CategoryContainer extends Component {
    constructor() {
        super();
        this.state = {
            categories: {},
        };
    }

    // categoriesRef.push({
    //     showTitle: true,
    //     title: 'Smile',
    //     categoryBoxChecked: false,
    // });

    componentDidMount = () => {
        // attach event listener to firebase
        console.log('mount');
        categoriesRef.once('value', (snapshot) => {
            console.log(snapshot.val());
            this.setState({
                categories: snapshot.val(),
            });
        });
    };

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
                    [key]: { showTitle: true, categoryBoxChecked: false },
                },
            });
        });
        categoriesRef.push({
            showTitle: true,
            title: 'value should show here',
        });
        // hardcoded the value
    };

    // pushing the indiviudal category obejct to the categoriesRef generates a unique key, which we can reference when we want to delete the category box
    handleNewCategory = () => {
        const emptyCat = {
            showTitle: false,
            title: '',
            categoryBoxChecked: false,
        };

        categoriesRef.push(emptyCat).then((catRef) => {
            const newKey = catRef.key;
            this.setState((currentState) => {
                return deepmerge(currentState, {
                    categories: {
                        [newKey]: emptyCat,
                    },
                });
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
        categoriesRef.update({ showTitle: false, title: '' });
    };

    deleteCategoryBox = (key) => {
        this.setState((currentState) => {
            return deepmerge(currentState, {
                categories: {
                    [key]: undefined,
                },
            });
        });
        categoriesRef.child(key).remove();
    };

    checkCategoryBox = (key) => {
        this.setState((currentState) => {
            return deepmerge(currentState, {
                categories: {
                    [key]: {
                        categoryBoxChecked: true,
                    },
                },
            });
        });
        console.log(this.state.categories.categoryBoxChecked);
    };

    // checkCategoryBox = (key) => {
    //     console.log(this.state.categories.categoryBoxChecked);
    //     this.setState({
    //         categories: {
    //             categoryBoxChecked: !this.state.categories.categoryBoxChecked,
    //         },
    //     });
    //     console.log(this.state.categories.categoryBoxChecked);
    // };

    render() {
        return (
            <div className="categoryWrapper">
                {Object.entries(this.state.categories)
                    .filter((entry) => {
                        return !!entry[1]; //explicit boolean conversion, if entry[1] is undefined it is false, wont make it to the map method to be displayed on the page. Above when deleting the category box, we are setting entry[1] to be undefined, therefore gets removed from pg.
                    })
                    .map((entry) => {
                        const [key, category] = entry;

                        return (
                            <Category
                                value={category.title}
                                onTitleChange={this.handleTitleChange}
                                onTitleSubmit={this.submitTitle}
                                showTitle={category.showTitle}
                                catKey={key}
                                onCategoryButtonClick={this.deleteCategoryTitle}
                                onCategoryBoxButtonClick={
                                    this.deleteCategoryBox
                                }
                                onCategoryCheckBoxClick={this.checkCategoryBox}
                            />
                        );
                    })}
                <button
                    className="btns newCatBtn"
                    onClick={this.handleNewCategory}
                >
                    <i className="fas fa-plus" />
                </button>
            </div>
        );
    }
}

export default CategoryContainer;
