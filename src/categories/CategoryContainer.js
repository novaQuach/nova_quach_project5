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

    componentDidMount = () => {
        const initialCategory = {
            showTitle: true,
            title: 'Smile',
            categoryBoxChecked: false,
        };
        // attach event listener to firebase
        categoriesRef.once('value', (snapshot) => {
            console.log(snapshot.val());

            const categories = snapshot.val();

            if (categories == null) {
                categoriesRef.push(initialCategory).then((catRef) => {
                    this.setState({
                        categories: {
                            [catRef.key]: initialCategory,
                        },
                    });
                });
            } else {
                this.setState({
                    categories: snapshot.val(),
                });
            }
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
                    [key]: { showTitle: true },
                },
            });
        });

        categoriesRef.child(key).update({
            showTitle: true,
            title: this.state.categories[key].title,
        });
    };

    // pushing the indiviudal category obejct to the categoriesRef generates a unique key, which we can reference when we want to delete the category box
    handleNewCategory = () => {
        const emptyCat = {
            showTitle: false,
            title: '',
            categoryBoxChecked: false,
        };

        categoriesRef.push(emptyCat).then((catRef) => {
            console.log(catRef);
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
                        categoryBoxChecked: !currentState.categories[key]
                            .categoryBoxChecked,
                    },
                },
            });
        });
        console.log(this.state.categories[key].categoryBoxChecked);

        categoriesRef.child(key).update({
            categoryBoxChecked: this.state.categories[key].categoryBoxChecked,
        });
    };

    render() {
        return (
            <div className="categoryWrapper">
                {Object.entries(this.state.categories)
                    .filter((entry) => {
                        return !!entry[1]; //explicit boolean conversion, if entry[1] is undefined it is false, wont make it to the map method to be displayed on the page. Above when deleting the category box, we are setting entry[1] to be undefined, therefore gets removed from pg.
                    })
                    .map((entry, index) => {
                        const [key, category] = entry;

                        return (
                            <Category
                                value={category.title}
                                onTitleChange={this.handleTitleChange}
                                onTitleSubmit={this.submitTitle}
                                showTitle={category.showTitle}
                                catKey={key}
                                index={index}
                                key={index}
                                categoryBoxChecked={category.categoryBoxChecked}
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
