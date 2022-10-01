import React from "react";

export default function Case({ info }) {
  return (
    <li>
      <a
        href={info.href}
        className="work"
        style={{ backgroundImage: "url(" + info.background + ")" }}
      >
        <div className="work-mask"></div>
        <div className="work-reveal-mask"></div>
        <div className="work-mask-number">
          <div className="work-mask-back">{info.number}</div>
          <div className="work-mask-front">
            <div data-index={info.number} className="work-mask-overlay">
              {info.number}
            </div>
          </div>
        </div>
        <div className="work-text-section">
          <h3 itemProp="name" className="work-title">
            {info.title}
          </h3>
          <h5 itemProp="description" className="work-subtitle">
            {info.description.map((row) => {
              return (
                <p key={row}>
                  {row}
                  <br />
                </p>
              );
            })}
          </h5>
          <button className="the-button call-to-button">
            <span className="button-text">{info.button}</span>
          </button>
        </div>
      </a>
    </li>
  );
}
