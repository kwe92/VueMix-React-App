import React, { useEffect } from "react";
import { useState } from "react";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";
import { VideoModal } from "../styles/video_modal/videoModalStyle";

//TODO: Fix previous video state showing shortly before newstate is rendered
export const TrailerMovies = (props) => {
  const [videoURL, setVideoURL] = useState(["https://youtu.be/sa9l-dTv9Gk"]);
  const [showModal, setShowModal] = props.showModal;

  if (props.title)
    movieTrailer(props.title).then((res) => {
      setVideoURL(res);
    });

  if (props.title) {
    return (
      <VideoModal className="modal" display={showModal}>
        <VideoModal className="modal-content" isLightMode={props.isLightMode}>
          <div
            onClick={() => {
              setShowModal(false);
            }}
          >
            <span>&times;</span>
          </div>
          <div style={{ height: "90%" }}>
            <ReactPlayer
              url={videoURL}
              controls={true}
              width={"100%"}
              height={"100%"}
            />
          </div>
        </VideoModal>
      </VideoModal>
    );
  }
};