import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar"
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {StoreType} from "./redux/state";

type PropsType = {
    store: StoreType;
}
const App = (props: PropsType) => {
    const {store} = props;
    const {dispatch} = store;
    const state = store.getState();
    const {profilePage, dialogsPage} = state;
    const {newMessageBody} = dialogsPage;
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-content'}>
                    <Route path={'/dialogs'}
                           render={() => <Dialogs dialogsPage={dialogsPage}/>}/>
                    <Route path={'/profile'}
                           render={() => <Profile profilePage={profilePage} dispatch={dispatch.bind(store)}/>}/>
                </div>

            </div>
        </BrowserRouter>
    );
};

export default App;
