import "./MainPage.scss";
import { React } from "react";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const base = `block`;

  const navigate = useNavigate();

  function handlerClick1() {
    navigate("/nav1");
  }

  return (
    <div className="container">
      <div className={`${base}_Box1`}>
        <div className={`${base}_navBox1`} onClick={handlerClick1} />
      </div>
    </div>
  );
}

export default MainPage;
