import React from "react";
import ProfileCard from "../components/ProfileCard";

export default function Profiles() {
  const width = "150";
  const height = "150";
  return (
    <div style={{ margin: "1%" }}>
      <ProfileCard
        name="Stew"
        image="./static/images/stew.png"
        text="This boss"
      />
    </div>
  );
}
