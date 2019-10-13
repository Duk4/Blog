export const createPost = (post) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();

        firestore.collection('posts').add({
            ...post,
            author: 'Dušan Tanasić',
            date: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_POST', post });
        }).catch((err) => {
            dispatch({ type: 'CREATE_POST_ERROR', err });
        });
    };
};

export const deletePost = (id) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();

        firestore.collection('posts').doc(id).delete().then(() => {
            dispatch({ type: 'DELETE_POST' });
        }).catch((err) => {
            dispatch({ type: 'DELETE_POST_ERROR', err });
        });
    };
};

export const editPost = (id, post) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();

        firestore.collection('posts').doc(id).update({
            ...post,
            title: post.title,
            content: post.content,
            date: new Date()
        }).then(() => {
            dispatch({ type: 'EDIT_POST' });
        }).catch((err) => {
            dispatch({ type: 'EDIT_POST_ERROR', err });
        });
    };
};