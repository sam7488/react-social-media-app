import { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import css from "./CreatePost.module.css";
import { PostList } from "../store/post-list-store";

export default function CreatePost({
  username,
  profileImg,
  userId,
  setSelectedTab,
}) {
  const [imageFile, setImageFile] = useState(null);       // actual file
  const [imagePreview, setImagePreview] = useState(null); // preview URL
  const [caption, setCaption] = useState("");
  const [tags, setTags] = useState("");

  const { addPost } = useContext(PostList);

  // Handle image selection
  const handleImageChange = (e) => {
  const file = e.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onloadend = () => {
    setImagePreview(reader.result); // base64 string
  };
  reader.readAsDataURL(file);
};

  // Create post and send to store
  const handlePost = () => {
    if (!caption.trim() && !imageFile) {
      alert("Please add a caption or image.");
      return;
    }

    const newPost = {
      id: uuidv4(),
      caption: caption.trim(),
      username: username || "john_doe",
      profileImg: profileImg || "https://i.pravatar.cc/150?img=3",
      image: imagePreview || "https://picsum.photos/600/500", 
      userId: userId || "user-1",
      tags: tags
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      likes: 0,
      comments: [],
      createdAt: new Date().toISOString(),
      file: imageFile || null,
    };

    addPost(newPost);

    // Reset form
    setImageFile(null);
    setImagePreview(null);
    setCaption("");
    setTags("");

    setSelectedTab("Home");

  };

  return (
    <div className={css.createPost}>
      <h3>Create New Post</h3>
      <div className={css.postForm}>
        
        {/* Image upload */}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className={css.fileInput}
        />

        {imagePreview && (
          <img
            src={imagePreview}
            alt="Preview"
            className={css.imagePreview}
          />
        )}

        {/* Caption */}
        <textarea
          placeholder="Write a caption..."
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className={css.captionInput}
        />

        {/* Tags */}
        <input
          type="text"
          placeholder="Add tags separated by commas"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className={css.tagsInput}
        />

        {/* Post button */}
        <button className={css.submitBtn} onClick={handlePost}>
          Post
        </button>
      </div>
    </div>
  );
}
