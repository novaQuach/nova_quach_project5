import React, { Component } from 'react';
import deepmerge from 'deepmerge';
import Category from './Category';

class CategoryContainer extends Component {
    constructor() {
        super();
        this.state = {
            categories: {},
        };
    }

    // Get the latest snapshot once from firebase
    fetchData = () => {
        // attach event listener to firebase
        this.props.userDbRef.child('categories').once('value', (snapshot) => {
            const categories = snapshot.val();

            if (categories) {
                this.setState({
                    categories: snapshot.val(),
                });
            }
        });
    };

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        // When props update, check if the userDbRef prop has changed, then fetch new data
        if (prevProps.userDbRef !== this.props.userDbRef) {
            this.fetchData();
        }
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

        this.props.userDbRef
            .child('categories')
            .child(key)
            .update({
                showTitle: true,
                title: this.state.categories[key].title,
            });
    };

    // pushing the indiviudal category obejct to the this.props.userDbRef.child('categories') generates a unique key, which we can reference when we want to delete the category box
    handleNewCategory = () => {
        const emptyCat = {
            showTitle: false,
            title: '',
            categoryBoxChecked: false,
        };

        this.props.userDbRef
            .child('categories')
            .push(emptyCat)
            .then((catRef) => {
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
        this.props.userDbRef
            .child('categories')
            .update({ showTitle: false, title: '' });
    };

    deleteCategoryBox = (key) => {
        this.setState((currentState) => {
            return deepmerge(currentState, {
                categories: {
                    [key]: undefined,
                },
            });
        });
        this.props.userDbRef
            .child('categories')
            .child(key)
            .remove();
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

        this.props.userDbRef
            .child('categories')
            .child(key)
            .update({
                categoryBoxChecked: this.state.categories[key]
                    .categoryBoxChecked,
            });
    };

    render() {
        return (
            //explicit boolean conversion, if entry[1] is undefined it is false, wont make it to the map method to be displayed on the page. Above when deleting the category box, we are setting entry[1] to be undefined, therefore gets removed from pg.
            <div className="categoryWrapper">
                {Object.entries(this.state.categories)
                    .filter((entry) => {
                        return !!entry[1];
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
                    <p className="new-task-msg"> new task</p>
                </button>
            </div>
        );
    }
}

export default CategoryContainer;
