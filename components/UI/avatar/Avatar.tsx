import React from "react";
import { Avatar } from "@nextui-org/react";

export default function AvatarComponent() {
  return (
    <div className="flex gap-4 items-center p-1">
      <Avatar
        src="https://publicdomainvectors.org/photos/Male-Avatar.png"
        size="lg"
      />
    </div>
  );
}
