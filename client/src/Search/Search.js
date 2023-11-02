import React from "react";
import "./Search.css";
import { useLocation } from "react-router-dom";

export default function Search() {
  const location = useLocation();
  const ImageUrls = [
    {
      id: 1,
      title: "Mr Clean",
      url: "https://i2.wp.com/www.geeksaresexy.net/wp-content/uploads/2020/04/movie1.jpg?resize=600%2C892&ssl=1",
    },
    {
      id: 2,
      title: "The Call of the Wild",
      url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kids-movies-2020-call-of-the-wild-1579042974.jpg?crop=0.9760858955588091xw:1xh;center,top&resize=480:*",
    },
    {
      id: 3,
      title: "Sonic the HedgeHog",
      url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*",
    },
    {
      id: 4,
      title: "Alita",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS82ET2bq9oTNwPOL8gqyoLoLfeqJJJWJmKQ&usqp=CAU",
    },
    {
      id: 5,
      title: "Raptors of the Galaxy",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdvuww0JDC7nFRxiFL6yFiAxRJgM-1tvJTxA&usqp=CAU",
    },
    {
      id: 6,
      title: "Raptors of the Galaxy",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdvuww0JDC7nFRxiFL6yFiAxRJgM-1tvJTxA&usqp=CAU",
    },
    {
      id: 7,
      title: "Raptors of the Galaxy",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdvuww0JDC7nFRxiFL6yFiAxRJgM-1tvJTxA&usqp=CAU",
    },
  ];
  return (
    <div className="search-class">
      <div className="search-title">
        <p>You searched for {location.state}</p>
      </div>
      <div className="results">
        {ImageUrls.filter((media) => {
          return media.title.toLowerCase().includes(location.state);
        }).map((media, index) => {
          return (
            <div className="searchedMedia" key={index}>
              <img src={media.url} alt="movie" />
              <p key={media.id}>{media.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
