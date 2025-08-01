
import React from "react";
import { useMicroPython } from "../MicroPythonContext";

export default function ConnectionSettings() {
  const { isConnected, connect, disconnect, error } = useMicroPython();


  if (!("serial" in navigator)) {
    return (
      <div>
        <h2>Web Serial API not supported in this browser.</h2>
        You probably need to use a Chrome-like browser or, if you're on Firefox, install the{" "}
        <a
          href="https://addons.mozilla.org/en-US/firefox/addon/webserial-for-firefox/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Web Serial API add-on
        </a>.
      </div>
    );
  }

  return (
    <div>
      <h2>Badge Connection</h2>
      <div>Status: {isConnected ? "Connected" : "Disconnected"}</div>
      {error && <div style={{ color: 'red' }}>Error: {error.message}</div>}
      <button onClick={isConnected ? disconnect : connect}>
        {isConnected ? "Disconnect" : "Connect"}
      </button>
    </div>
  );
 
 // Removed unreachable code after the return statement
}