import React from "react";
import styled from "styled-components";
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
