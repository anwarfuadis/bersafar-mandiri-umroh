
import React from "react";

type RealisticCloudProps = {
  style?: React.CSSProperties;
  className?: string;
  src?: string;
  alt?: string;
};

const DEFAULT_CLOUD =
  "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=300&q=80"; // Transparent realistic cloud (edited for alpha use)

const RealisticCloud: React.FC<RealisticCloudProps> = ({
  style,
  className = "",
  src = DEFAULT_CLOUD,
  alt = "Realistic cloud"
}) => (
  <img
    src={src}
    style={{
      pointerEvents: "none",
      userSelect: "none",
      position: "absolute",
      ...style
    }}
    className={className}
    alt={alt}
    draggable={false}
    loading="lazy"
  />
);

export default RealisticCloud;
