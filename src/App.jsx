import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert("ボタンクリック！");
  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage />
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
