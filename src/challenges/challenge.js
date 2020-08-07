import React from "react";

import { Link } from "react-router-dom";

export default ({ title, description, link, img }) => {
  return (
    <div>
      <div>
        <Link to={link}>{title}</Link>
      </div>
      <div>{description}</div>
    </div>
  );
};
