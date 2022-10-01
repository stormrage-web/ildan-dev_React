import React from "react";

export default function TopSection({ setActive }) {
  return (
    <React.Fragment>
      <div className="big-logo" />
      <div className="name">
        <div className="text-loading-mask">
          <h1>Ildan Sharifullin</h1>
          <div id="h1-mask" className="h-loading"></div>
        </div>
        <div className="text-loading-mask">
          <h2>Front-end developer</h2>
          <div id="h2-mask" className="h-loading h2-loading"></div>
        </div>
        <div onClick={() => setActive(false)} className="button-mask">
          <input id="about" type="button" value="About me" />
          <span className="button-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 476.213 476.213"
            >
              <path d="M405.606 167.5l-21.212 21.213 34.393 34.393H0v30h418.787L384.394 287.5l21.212 21.213 70.607-70.607" />
            </svg>
          </span>
          <div id="btn-mask" className="h-loading btn-loading"></div>
        </div>
      </div>
      <div></div>
      <div></div>
      <ul className="social-vertical-stripe">
        <li>
          <a href="https://t.me/d1sinterested" target="_blank" rel="noreferrer">
            <i
              className="fab fa-telegram-plane"
              style={{ color: "#4c4f65" }}
            ></i>
          </a>
        </li>
        <li>
          <a
            href="https://vk.com/dis1nterested"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-vk" style={{ color: "#4c4f65" }}></i>
          </a>
        </li>
        <li>
          <a href="mailto:sharfull33@gmail.ru" target="_blank" rel="noreferrer">
            <i className="far fa-envelope" style={{ color: "#4c4f65" }}></i>
          </a>
        </li>
      </ul>
    </React.Fragment>
  );
}
