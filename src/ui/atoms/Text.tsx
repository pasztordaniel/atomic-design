import classNames from "classnames";
import React from "react";

type TagsAllowed = "p" | "span";
type DynamicProps = Pick<JSX.IntrinsicElements, TagsAllowed>;

type Props<Tag extends TagsAllowed> = {
  component?: Tag;
  variant?: "primary" | "secondary";
} & DynamicProps[Tag];

const Text = <Tag extends TagsAllowed = "p">({
  children,
  component,
  className,
  ...rest
}: Props<Tag>) =>
  React.createElement(
    component || "p",
    { className: classNames("text-md ", className), ...rest },
    children
  );

export default Text;
