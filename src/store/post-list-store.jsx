import {createContext, useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';

export let PostList = createContext({
  postList : [],
  addPost : () => {},
  deletepost : () => {},
  toggleLike : () => {}
});

const postListReducer = (postList, action) => {
  switch(action.type) {
    case 'ADD_POST' :
      return [{
        id : action.payload.id,
        caption : action.payload.caption,
        username : action.payload.username,
        profileImg : action.payload.profileImg,
        image : action.payload.image,
        userId : action.payload.userId,
        tags : action.payload.tags,
        likes : action.payload.likes,
        comments : action.payload.comments,
      }, ...postList]
    case 'DELETE_POST' : 
      return postList.filter(item => item.id != action.payload.id);
    default : 
      return postList;
  }
}

export const PostListProvider = ({children}) => {
  let [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

  const addPost = (obj) => {
    return dispatchPostList({type : 'ADD_POST',payload : {...obj}});
  };

  const deletePost = (id) => {
    return dispatchPostList({type : 'DELETE_POST',payload : { id } });
  };

  const toggleLike = (id, isLiked) => {
  dispatchPostList({
    type: "TOGGLE_LIKE",
    payload: { id, isLiked },
  });
};

  return <PostList.Provider value={{postList, addPost, deletePost, toggleLike}}>
    {children}
  </PostList.Provider>
}

export const DEFAULT_POST_LIST = [
  {
    id : uuidv4(),
    username: "john_doe",
    profileImg: "https://i.pravatar.cc/150?img=3",
    image: "https://picsum.photos/600/500",
    userId : 'user-1',
    caption: 'Enjoying the sunset at the beach 🌅',
    tags : ['tag', 'kjlds', 'fkd'],
    likes: 120,
    comments: [
      { user: "alex", text: "Wow amazing!" },
      { user: "sam", text: "Love this picture ❤️" },
      { user: "lina", text: "Perfect shot!" }]
  },
]

export default PostListProvider;