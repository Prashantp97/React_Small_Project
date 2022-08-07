import React, { useState } from "react";

function QrCode() {
  const [qr, setqr] = useState("");
  const [text, settext] = useState("");
  const generate = () => {
    QRCode.toDataURL(text).then((data) => {
      setqr(data);
    });
  };
  const textchange = (e) => {
    settext(e.target.value);
  };
  return (
    <>
      <input type="text" placeholder="Create your QR" onChange={textchange} />
      <button onClick={generate}>Generat</button>
      <img src={qr} alt="" />
    </>
  );
}

export default QrCode;
