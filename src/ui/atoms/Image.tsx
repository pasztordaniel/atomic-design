import classNames from "classnames";
import React, { ImgHTMLAttributes } from "react";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {}

const Image: React.FC<Props> = ({ className, ...rest }) => (
  <img loading="lazy" {...rest} className={classNames("block", className)} />
);

export default Image;
