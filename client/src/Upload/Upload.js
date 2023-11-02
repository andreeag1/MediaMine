import React from "react";
import "./Upload.css";
import { UploadMedia } from "../Routes/routes";

export default function Upload() {
  const [title, setTitle] = React.useState("");
  const [video, setVideo] = React.useState("");
  const [image, setImage] = React.useState("");

  const handleClick = async () => {
    try {
      await UploadMedia(title, video, image);
    } catch (error) {}
  };

  return (
    <div className="upload">
      <div className="upload-title">Upload</div>
      <div className="input-container">
        <input
          className="input-upload"
          style={{ width: "200px" }}
          placeholder="Title"
          type="text"
          onChange={(e) => setTitle(e.target.value.toLowerCase())}
        ></input>
      </div>
      <div className="input-container">
        <input
          className="input-upload"
          style={{ width: "200px" }}
          placeholder="Video Url"
          type="text"
          onChange={(e) => setVideo(e.target.value.toLowerCase())}
        ></input>
      </div>
      <div className="input-container">
        <input
          className="input-upload"
          style={{ width: "200px" }}
          placeholder="Image Url"
          type="text"
          onChange={(e) => setImage(e.target.value.toLowerCase())}
        ></input>
      </div>
      <div className="button-container">
        <button className="submit" onClick={handleClick}>
          UPLOAD
        </button>
      </div>
    </div>
  );
}
