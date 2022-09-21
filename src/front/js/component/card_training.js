<<<<<<< HEAD
import React, { useState, useEffect, useContext } from "react";
=======
import React, { useState, useEffect } from "react";
>>>>>>> 8a0c477 (start desing training)
import { Link } from "react-router-dom";
import "../../styles/card_training.css";
import { getToken } from "../auth";
import { Context } from "../store/appContext";
import classNames from "classnames";

export const CardTraining = () => {
<<<<<<< HEAD
  const { store, actions } = useContext(Context);
  const favorites = store.favorites;
=======
>>>>>>> 8a0c477 (start desing training)
  const YOUTUBE_PLAYLIST =
    "https://www.googleapis.com/youtube/v3/playlistItems";
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      try {
        await fetch(
          `${YOUTUBE_PLAYLIST}?part=snippet&playlistId=PLiVna37s3zrijZRwQIf1DNxUP1YgM5_Mc&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`
        )
          .then((response) => response.json())
          .then((data) => setVideos(data.items));
      } catch (error) {
        console.log(error);
      }
    };
    getVideos();
  }, []);

  const addFavorite = (video) => {
    const title = video.snippet.title;
    const url =
      "https://www.youtube.com/watch?v=" + video.snippet.resourceId.videoId;
    const url_image = video.snippet.thumbnails.medium.url;

    fetch(process.env.BACKEND_URL + "/api/favorite", {
      method: "PUT",
      body: JSON.stringify({
        url,
        url_image,
        title,
      }),
      headers: {
        Authorization: "Bearer " + getToken(),
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error();
        }
        return response.json();
      })
      .then((data) => {
        actions.getFavorites();
      })
      .catch(() => setShowError(true));
  };

  return videos.map((video) => {
    const { id, snippet = {} } = video;
    const { title, thumbnails = {}, resourceId } = snippet;
    const { medium = {} } = thumbnails;
    const isFav = favorites.some((fav) => fav.url.includes(resourceId.videoId));
    return (
      <div className="card cardYoutube " key={id}>
        <a
          href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
          target="_blank"
        >
          <img
            width={medium.width}
            height={medium.height}
            src={medium.url}
            className="card-img-top"
            alt="training"
          />
        </a>
        <div className="card-body">
          <p className="card-title text-decoration-none titulovideo">{title}</p>
          <p className="card-text text-dark">{video.channelTitle}</p>
          <p className="position-absolute bottom-0 end-0 heart">
            <i
              className={classNames(
                {
                  "fa-regular": !isFav,
                  "fa-solid": isFav,
                  red: isFav,
                  clickable: !isFav,
                },
                "fa-heart"
              )}
              onClick={() => !isFav && addFavorite(video)}
            ></i>
          </p>
        </div>
      </div>
    );
  });
};
