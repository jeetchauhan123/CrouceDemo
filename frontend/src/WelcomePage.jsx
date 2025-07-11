import React, { useState } from "react";
import "./index.css";
import { userModules } from "./data";


const WelcomePage = ({ user }) => {
  const username = user.email.split("@")[0];
  const userData = userModules.users.find((u) => u.email === user.email);
  const [openModuleId, setOpenModuleId] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const toggleModule = (moduleId) => {
    setOpenModuleId((prev) => (prev === moduleId ? null : moduleId));
  };


  return (
    <div className="dashboard">
      <aside className="sidebar">
        <h2 className="sidebar-title">📚 {username}</h2>
        {userData.modules.map((mod) => (
          <div key={mod.moduleId} className="module">
            <div
              className="module-title"
              onClick={() => toggleModule(mod.moduleId)}
            >
              {mod.title}
            </div>
            <div
              className={`chapters ${
                openModuleId === mod.moduleId ? "open" : ""
              }`}
            >
              {mod.chapters.map((ch) => (
                <div
                  key={ch.chapterId}
                  className="chapter"
                  onClick={() => setSelectedVideo(ch.video)}
                >
                  ▶️ {ch.title}
                </div>
              ))}
            </div>
          </div>
        ))}
      </aside>

      <main className="video-area">
        {selectedVideo ? (
          <iframe
            width="100%"
            height="100%"
            src={selectedVideo}
            title="Video Player"
            allowFullScreen
          ></iframe>
        ) : (
          <h3 style={{ textAlign: "center", marginTop: "20%" }}>
            👈 Select a chapter to watch the video
          </h3>
        )}
      </main>
    </div>
  );
};

export default WelcomePage;
