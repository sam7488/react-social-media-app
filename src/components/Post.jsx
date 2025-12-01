import { useContext, useState } from "react";
import css from "./Post.module.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { PostList } from "../store/post-list-store";

export default function Post({ post, postInProfile }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes || 0);
  const [showMenu, setShowMenu] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <div className={css.postCard}>
      {/* Header */}
      <div className={css.header}>
        <img
          className={css.avatar}
          src={post.profileImg}
          alt="avatar"
        />
        <div className={css['sub-header']}>
          <span className={css.username}>{post.username}</span>
          <span className={css.tags}>{post.tags.map(tag => tag + " ")}</span>
        </div>
        {/* Three-dot menu */}
        <div className={css.menuWrapper}>
          <span 
            className={css.menuIcon}
            onClick={() => setShowMenu(prev => !prev)}
          >
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </span>

          {showMenu && (
            postInProfile ? 
            <div className={css.dropdown}>
              <div className={css.dropdownItem}>Delete</div>
            </div>
            :
            <div className={css.dropdown}>
              <div className={css.dropdownItem}>Hide</div>
              <div className={css.dropdownItem}>Report</div>
            </div>
          )}
        </div>
      </div>

      {/* Post Image */}
      {post.image && <img className={css.postImage} src={post.image} alt="post" />}

      {/* Interaction Buttons */}
      <div className={css.actions}>
        <i
          className={`fa${liked ? "s" : "r"} fa-heart ${liked ? css.liked : ""}`}
          onClick={handleLike}
        ></i>
        <i className="far fa-comment"></i>
        <i className="far fa-paper-plane"></i>
      </div>

      {/* Likes */}
      <div className={css.likes}>{likes} likes</div>

      {/* Caption */}
      <div className={css.caption}>
        <span className={css.username}>{post.username}</span> {post.caption}
      </div>

      {/* Comments */}
      <div className={css.comments}>
        {post.comments?.slice(0, 2).map((c, i) => (
          <div key={i}>
            <span className={css.username}>{c.user}</span> {c.text}
          </div>
        ))}
        {post.comments?.length > 2 && (
          <span className={css.viewAll}>
            View all {post.comments.length} comments
          </span>
        )}
      </div>
    </div>
  );
}
