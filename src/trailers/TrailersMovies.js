import React, { useEffect } from "react";
import { useState } from "react";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";
import * as style from "../styles/video_modal/videoModalStyle";
import sadFace from "../assets/sadface_nbg.png";
import styled from "styled-components";

// TODO: Handle errors due to no inital movie value and no trailer found along with any onther error caught by the browser
// TODO: Slim component down and get rid of duplicaet lazy code!

export const TrailerMovies = (props) => {
  const [video, setVideo] = useState([]);
  //https://youtu.be/sa9l-dTv9Gk
  const [videoURL, setVideoURL] = useState([""]);
  const [showModal, setShowModal] = props.showModal;

  useEffect(() => {
    setVideo(props.title);
    movieTrailer(video).then((res) => {
      setVideoURL(res);
    });
  }, [video]);

  const handleModalClose = () => {
    setVideoURL("");
    setShowModal(false);
  };

  const closeButton = (
    <div onClick={handleModalClose}>
      <span>&times;</span>
    </div>
  );

  console.log("from trailer movies", videoURL);

  return (
    <style.VideoModal className="modal" display={showModal}>
      <style.VideoModal
        className="modal-content"
        isLightMode={props.isLightMode}
      >
        {videoURL ? (
          <>
            {closeButton}
            <div style={{ height: "90%" }} id={"player"}>
              <ReactPlayer
                url={videoURL}
                controls={true}
                width={"100%"}
                height={"100%"}
              />
            </div>
          </>
        ) : (
          <>
            {closeButton}
            <style.ErrorWrapper>
              <style.ErrorMessage isLightMode={props.isLightMode}>
                No Video Found
              </style.ErrorMessage>
              <style.ErrorTitle isLightMode={props.isLightMode}>
                Title: {video}
              </style.ErrorTitle>

              <img src={sadFace} />
            </style.ErrorWrapper>
          </>
        )}
      </style.VideoModal>
    </style.VideoModal>
  );
};
