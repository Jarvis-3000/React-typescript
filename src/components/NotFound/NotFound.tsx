import React, { FC } from "react";
import { Navigate } from "react-router-dom";

interface NotFoundProps {}

const NotFound: FC<NotFoundProps> = ({}) => {
  return <Navigate to="/" replace />;
};

export default NotFound;
