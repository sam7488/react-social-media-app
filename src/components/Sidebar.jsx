import css from "./Sidebar.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";


const Sidebar = ({ selectedTab, setSelectedTab }) => {
  return (
    <div className={`d-flex flex-column p-3 text-white bg-dark ${css.sidebar}`}>

      {/* Header */}
      <div className="d-flex align-items-center mb-4">
        <span className="fs-4 fw-bold">SocialApp</span>
      </div>

      {/* Navigation */}
      <ul className="nav nav-pills flex-column mb-auto">

        {[
          { label: "Home", id: "Home", icon: "house" },
          { label: "Create Post", id: "CreatePost", icon: "plus-circle" },
          { label: "Notifications", id: "Notifications", icon: "bell" },
          { label: "Explore", id: "Explore", icon: "compass" },
          { label: "Profile", id: "Profile", icon: "person" },
        ].map((item) => (
          <li
            key={item.id}
            className="nav-item mb-1"
            onClick={() => setSelectedTab(item.id)}
          >
            <button
              className={`nav-link text-white w-100 text-start ${selectedTab === item.id ? "active" : ""}`}
            >
              <i className={`bi bi-${item.icon} me-2`}></i>
              {item.label}
            </button>
          </li>
        ))}

      </ul>

      {/* Sticky bottom login/logout */}
      <div className={`mt-auto pt-3 border-top ${css['logout-btn']}`}>
        <button className="btn btn-outline-light w-100">
          Sign Out
        </button>
      </div>

    </div>
  );
};

export default Sidebar;
