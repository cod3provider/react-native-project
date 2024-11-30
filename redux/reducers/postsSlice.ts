import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type Comment = {
  text: string;
  date: string;
};

type Post = {
  name: string;
  location: string;
  photoPicture: string;
  comments: { text: string; date: string }[];
};

type PostsState = {
  posts: Post[];
};

const initialState: PostsState = {
  posts: [],
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    // addPostReducer: (state, action: PayloadAction<Post>) => {
    //   state.posts.push(action.payload);
    // },
    addPostReducer: (state, action: PayloadAction<Omit<Post, 'comments'>>) => {
      const newPost = { ...action.payload, comments: [] }; // Инициализация comments
      state.posts.push(newPost);
    },
    addCommentToPost: (state, action: PayloadAction<{ postId: number; comment: { text: string; date: string } }>) => {
      const { postId, comment } = action.payload;
      const post = state.posts[postId];

      if (post) {
        if (!post.comments) {
          post.comments = []; // Инициализация comments, если их нет
        }
        post.comments.push(comment);
      } else {
        console.error(`Post with id ${postId} not found`);
      }
    },
  },
});

export const {addPostReducer, addCommentToPost} = postsSlice.actions;
export default postsSlice.reducer;