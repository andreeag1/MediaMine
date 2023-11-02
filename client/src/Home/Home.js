import React from "react";
import CarouselComponent from "../Components/Carousel/Carousel";
import "./Home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [mediaSearched, setMediaSearched] = React.useState("");

  const navigate = useNavigate();

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
  ];

  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      navigate("/search", { state: mediaSearched });
    }
  };

  const handleClick = () => {
    navigate("/upload");
  };

  return (
    <div className="home">
      <div className="header">
        <div className="search">
          <input
            className="input"
            style={{ width: "200px" }}
            placeholder="Search..."
            type="text"
            onChange={(e) => setMediaSearched(e.target.value.toLowerCase())}
            onKeyDown={handleSubmit}
          ></input>
        </div>
        <div className="title">Media Mine</div>

        <div className="button">
          <button class="button-9" role="button" onClick={handleClick}>
            UPLOAD
          </button>
        </div>
      </div>
      <CarouselComponent />
      <CarouselComponent />
      <CarouselComponent />
    </div>
  );
}
