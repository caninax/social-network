import React from 'react';

import classes from './Profile.module.css';
import {MyPosts} from './MyPosts/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {AddPostActionType, ProfilePageType, UpdateNewPostTextActionType} from "../../redux/state";

export type PropsType = {
    profilePage: ProfilePageType;
    dispatch: (action: AddPostActionType | UpdateNewPostTextActionType) => void
}

export const Profile = (props: PropsType) => {
    const {profilePage, dispatch} = props;
    const {postsData, newPostText} = profilePage;
    const {content, contentImg, item} = classes;
    return (
        <main className={content}>
            <ProfileInfo/>
            <MyPosts postsData={postsData}  newPostText={newPostText} dispatch={dispatch}/>
        </main>
    )
};
