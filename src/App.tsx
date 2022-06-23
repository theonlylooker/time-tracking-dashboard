import React, { useEffect, useState } from "react";
import axios from "axios";
import { FetchData } from "./types/types";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import profileImg from "./Assets/images/image-jeremy.png";
import { CardStyled } from "./components/TrackingCard/TrackingCard.style";
import workIcon from "./Assets/images/icon-work.svg";
import playIcon from "./Assets/images/icon-play.svg";
import studyIcon from "./Assets/images/icon-study.svg";
import excersiseIcon from "./Assets/images/icon-exercise.svg";
import socialIcon from "./Assets/images/icon-social.svg";
import selfcareIcon from "./Assets/images/icon-self-care.svg";
function App() {
  const URL = "http://localhost:5000/users/1";
  const [data, setData] = useState<FetchData>();
  const [type, setType] = useState("weekly");
  const icons = [
    workIcon,
    playIcon,
    studyIcon,
    excersiseIcon,
    socialIcon,
    selfcareIcon,
  ];
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(URL);
        setData(data);
      } catch (error) {}
    };
    getData();
  }, []);
  return (
    <div>
      {data && <ProfileCard name={data.name} img={profileImg} />}
      {data &&
        data.tracking.map((elemento, index) => (
          <CardStyled key={index} img={icons[index]} color={elemento.title} />
        ))}
      {type == "week" && <></>}
      {type == "montly" && <></>}
    </div>
  );
}

export default App;
