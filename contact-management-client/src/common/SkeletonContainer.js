import React from "react";
import Skeleton from "react-loading-skeleton";
const SkeletonContainer = ({ count = 3 }) => {
  return <Skeleton count={count} width="100%" height="3rem" />;
};

export default SkeletonContainer;
