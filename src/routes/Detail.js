import React, {useEffect} from "react";
import "./Detail.css";

function Detail(props) {
  useEffect(() => {
    const {location, history} = props;
    if (location.state === undefined) {
      history.push("/");
    }
  }, [props]);

  const {location} = props;
  if (location.state) {
    return (
        <div className="detail__container">
          <span>{location.state.title}</span>
        </div>
    );
  } else {
    return null;
  }
}

export default Detail;