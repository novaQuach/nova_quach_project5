import Konami from 'react-konami-code';
import React, { Component } from 'react';
import './App.scss';
import firebase from 'firebase';

// Components
import DateTime from './dateTime/DateTime';
import FocusContainer from './focus/FocusContainer';
import CategoryContainer from './categories/CategoryContainer';
import Nova from './Nova';

// const dbRef = firebase.database().ref('./UserData.//focusSection');
const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();
const rootRef = firebase.database().ref('/UserData');

class App extends Component {
    constructor() {
        super();
        this.state = {
            user: null,
            userDbRef: null,
        };
    }

    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    user: user,
                    userDbRef: rootRef.child(user.uid),
                });
            } else {
                this.setState({
                    userDbRef: rootRef.child('Anon'),
                });
                console.log('not logged in');
            }
        });
    }

    login = () => {
        auth.signInWithPopup(provider).then((result) => {
            console.log(result);
            this.setState({
                user: result.user,
            });
        });
    };

    logOut = () => {
        auth.signOut().then(() => {
            this.setState({
                user: null,
            });
        });
    };

    easterEgg = () => {
        const audio = new Audio(`${process.env.PUBLIC_URL}/kawhi_laugh.mp3`);
        audio.play();

        const sheet = document.createElement('style');
        sheet.innerHTML = `.categoryBoxWrapper { background-image: url(${
            process.env.PUBLIC_URL
        }/kawhi.jpg); background-size: cover; } .catTitle,.catTitleInput { color: white; }`;
        document.body.appendChild(sheet);
    };

    render() {
        return (
            <main className="App">
                {this.state.user ? (
                    <div>
                        <button onClick={this.logOut}>Logout</button>
                        <p>Hello {this.state.user.displayName}</p>
                    </div>
                ) : (
                    <div>
                        <button onClick={this.login}>Login</button>
                        <p> please login or view as guest</p>
                    </div>
                )}
                <DateTime />
                {this.state.userDbRef ? (
                    <>
                        <FocusContainer userDbRef={this.state.userDbRef} />
                        <CategoryContainer userDbRef={this.state.userDbRef} />
                    </>
                ) : null}

                <Nova />
                <Konami action={this.easterEgg} />
                <Konami
                    action={this.easterEgg}
                    code={[82, 65, 80, 84, 79, 82, 83]}
                />
            </main>
        );
    }
}

export default App;

// {
//     this.state.user ? (
//         <div>
//             <button onClick={this.logOut}>Logout</button>
//             <p>Hello {this.state.user.displayName}</p>
//         </div>
//     ) : (
//         <div>
//             <button onClick={this.login}>Login</button>
//             <p> please login or view as guest</p>
//         </div>
//     )
// }
