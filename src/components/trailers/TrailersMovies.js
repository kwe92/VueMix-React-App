import React, { useEffect } from "react";
import { useState } from "react";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";
import * as style from "../../styles/styled_components/videoModalStyle";
import sadFace from "../../assets/sadface_nbg.png";

export const TrailerMovies = (props) => {
  const [video, setVideo] = useState([]);
  //https://youtu.be/sa9l-dTv9Gk
  const [videoURL, setVideoURL] = useState([""]);
  const [showModal, setShowModal] = props.showModal;

  useEffect(() => {
    setVideo(props.title);
    movieTrailer(video).then((res) => setVideoURL(res));
  }, [video]);

  const handleModalClose = () => {
    setVideoURL([""]);
    setShowModal(false);
  };

  const CloseButton = <span onClick={handleModalClose}>&times;</span>;

  const VideoPlayer = (
    <div style={{ height: "90%" }} id={"player"}>
      <ReactPlayer
        url={videoURL}
        controls={true}
        width={"100%"}
        height={"100%"}
      />
    </div>
  );

  const ErrorMessage = (
    <style.ErrorWrapper>
      <style.ErrorMessage isLightMode={props.isLightMode}>
        No Video Found
      </style.ErrorMessage>
      <style.ErrorTitle isLightMode={props.isLightMode}>
        Title: {video}
      </style.ErrorTitle>

      <img src={sadFace} />
    </style.ErrorWrapper>
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
            {CloseButton}
            {VideoPlayer}
          </>
        ) : (
          <>
            {CloseButton}
            {ErrorMessage}
          </>
        )}
      </style.VideoModal>
    </style.VideoModal>
  );
};
