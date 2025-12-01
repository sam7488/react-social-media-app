import { useContext } from 'react';
import Post from './Post'
import { PostList } from '../store/post-list-store';

const PostCollection = () => {
  const { postList } = new useContext(PostList);

  return (
    <>
    {
      postList?.map((post) => (<Post key={post.id} post={post}></Post>))
    }
    </>
  )
}

export default PostCollection;