import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import Webcam from "react-webcam"; //https://www.npmjs.com/package/react-webcam

const UtilesWebcam = () => {
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);

  const handleDataAvailable = ({ data }) => {
    if (data.size > 0) {
      setRecordedChunks((prev) => prev.concat(data));
    }
  };

  const handleStartCaptureClick = () => {
    setCapturing(true);
    setRecordedChunks([]); // Reinicia los datos anteriores
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm",
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  };

  const handleStopCaptureClick = () => {
    mediaRecorderRef.current.stop();
    setCapturing(false);
  };

  const handleDownload = () => {
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm",
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = "captura.webm";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    }
  };

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/utilidades">Utiles</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Utiles Webcam React
          </li>
        </ol>
      </nav>

      <h1>Webcam React</h1>

      <Webcam ref={webcamRef} />

      {capturing ? (
        <button className="btn btn-danger" onClick={handleStopCaptureClick}>
          Detener Captura
        </button>
      ) : (
        <button className="btn btn-success" onClick={handleStartCaptureClick}>
          Hacer Captura
        </button>
      )}

      {recordedChunks.length > 0 && (
        <button className="btn btn-primary" onClick={handleDownload}>
          Descargar Video
        </button>
      )}
    </>
  );
};

export default UtilesWebcam;
