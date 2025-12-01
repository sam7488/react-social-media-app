import { useState } from "react";
import css from "./BioEditor.module.css";

export default function BioEditor({ initialBio = "", onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [bio, setBio] = useState(initialBio);

  const handleSave = () => {
    onSave(bio); // send updated bio to parent
    setIsEditing(false);
  };

  const handleCancel = () => {
    setBio(initialBio);
    setIsEditing(false);
  };

  return (
    <div className={css.bioEditor}>
      {isEditing ? (
        <div className={css.bioForm}>
          <input
            type="text"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className={css.bioInput}
            placeholder="Write your bio..."
          />
          <div className={css.bioButtons}>
            <button className={css.saveBtn} onClick={handleSave}>Save</button>
            <button className={css.cancelBtn} onClick={handleCancel}>Cancel</button>
          </div>
        </div>
      ) : (
          <div>
          <div className={css.bio}>{bio ? bio : ""}</div>
          <div className={css.addBio}
            onClick={() => setIsEditing(true)}
            >
              {bio.length === 0 ? "Add Bio" : "Edit Bio"}
          </div>
        </div>
      )}
    </div>
  );
}
