import {AddPostActionType, PostType, ProfilePageType, UpdateNewPostTextActionType} from "./state";

const ADD_POST: 'ADD-POST' = 'ADD-POST';
const UPDATE_NEW_POST_TEXT: 'UPDATE-NEW-POST-TEXT' = 'UPDATE-NEW-POST-TEXT';

export const profileReducer = (state: ProfilePageType, action: AddPostActionType | UpdateNewPostTextActionType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: 7,
                message: state.newPostText,
                like: 0
            };
            state.postsData.push(newPost);
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
    }
    return state;
};
