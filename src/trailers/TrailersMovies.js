import React, { useEffect } from "react";
import { useState } from "react";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";
import { VideoModal } from "../styles/video_modal/videoModalStyle";

// TODO: Handle errors due to no inital movie value and no trailer found along with any onther error caught by the browser
// TODO: Fix previous video state showing shortly before newstate is rendered
export const TrailerMovies = (props) => {
  const [video, setVideo] = useState();
  //https://youtu.be/sa9l-dTv9Gk
  const [videoURL, setVideoURL] = useState([""]);
  const [showModal, setShowModal] = props.showModal;

  if (props.title) {
    movieTrailer(props.title).then((res) => {
      setVideoURL(res);
    });
  }

  // const handleSearch = () => {
  //   console.log("from handle search");
  //   setVideo(props.title);
  //   movieTrailer(props.title).then((res) => {
  //     setVideoURL(res);
  //   });
  // };

  // useEffect(() => {
  //   handleSearch();
  // }, [video]);

  console.log("from trailer movies", props.title);

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
