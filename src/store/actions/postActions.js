export const createPost = (post) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // Async call
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