import React from "react";
import { Weavy, WyChat } from "@weavy/uikit-web";

function Home() {
  const weavy = new Weavy();
  weavy.url = "https://myenvironment.weavy.io";
  weavy.tokenFactory = async (refresh) => "access_token";
  return (
    <div>
      <wy-messenger></wy-messenger>
    </div>
  );
}

export default Home;
