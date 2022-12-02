import { React, useState } from "react";
import "./Nav.scss";

function Nav() {
  const base = `nav`;

  // const [state, setState] = useState("");

  const list = document.querySelectorAll(".nav_list");
  function activeLink() {
    list.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
  }
  list.forEach((item) => item.addEventListener("click", activeLink));

  // ${({ inActive }) => inActive ? "active" : undefined}
  console.log(list);

  return (
    <div className={`${base}`}>
      <div className={`${base}_navigation`}>
        <ul className={`${base}_ul`}>
          <li className={`${base}_list active `}>
            <a href="#">
              <span className={`${base}_icon`}>
                <ion-icon name="home-outline"></ion-icon>
              </span>
              <span className={`${base}_text`}>Home</span>
            </a>
          </li>
          <li className={`${base}_list`}>
            <a href="#">
              <span className={`${base}_icon`}>
                <ion-icon name="person-outline"></ion-icon>
              </span>
              <span className={`${base}_text`}>Profile</span>
            </a>
          </li>
          <li className={`${base}_list`}>
            <a href="#">
              <span className={`${base}_icon`}>
                <ion-icon name="chatbubble-outline"></ion-icon>
              </span>
              <span className={`${base}_text`}>Message</span>
            </a>
          </li>
          <li className={`${base}_list`}>
            <a href="#">
              <span className={`${base}_icon`}>
                <ion-icon name="camera-outline"></ion-icon>
              </span>
              <span className={`${base}_text`}>Photos</span>
            </a>
          </li>
          <li className={`${base}_list`}>
            <a href="#">
              <span className={`${base}_icon`}>
                <ion-icon name="settings-outline"></ion-icon>
              </span>
              <span className={`${base}_text`}>Settings</span>
            </a>
          </li>
          <div className={`${base}_indicator`}></div>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
