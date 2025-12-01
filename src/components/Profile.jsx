import { useContext } from 'react'
import css from './Profile.module.css'
import { PostList } from '../store/post-list-store';
import Post from './Post';
import BioEditor from './BioEditor';


const Profile = () => {
  const {postList} = useContext(PostList);

  return (
    <div className={css.container}>
      <div className={css.profileHeader}>
        <img
          className={css.profileImg}
          src="https://i.pravatar.cc/150?img=3"
          alt="avatar"
        />

        <div className={css.subHeader}>
          {/* Username */}
          <span className={css.username}>userName</span>

          {/* Stats */}
          <div className={css.stats}>
            <span className={css.statItem}><strong>5</strong> posts</span>
            <span className={css.statItem}><strong>5</strong> followers</span>
            <span className={css.statItem}><strong>5</strong> following</span>
          </div>

          {/* Bio */}
          <BioEditor
            initialBio="" // replace with user bio if available
            onSave={(newBio) => console.log("Saved bio:", newBio)}
          />
        </div>
      </div>

      <div className={css.displayPosts}>
        {postList.map(post => <Post key={post.id} post={post} postInProfile={true}></Post>)}
      </div>
    </div>
  )
}

export default Profile