import React, { useState } from "react";

export default function TextForm({ heading, showAlert, theme , themeConfig}) {
    const [text, setText] = useState("");
    const [copyButtonText, setCopyButtonText] = useState("Copy");

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes} Minutes ${remainingSeconds} Seconds`;
      }

    const handleOnChange = (event) => setText(event.target.value);
  
    const handleUppercase = () => {
      setText(text.toUpperCase());
      showAlert("Converted to Uppercase", "success");
    };
  
    const handleLowercase = () => {
      setText(text.toLowerCase());
      showAlert("Converted to Lowercase", "success");
    };
  
    const handleClearText = () => {
      setText("");
      showAlert("Text cleared", "success");
    };
  
    const handleRemoveExtraSpaces = () => {
      setText(text.replace(/\s+/g, " ").trim());
      showAlert("Extra spaces removed", "success");
    };

    const handleCopyToClipboard = () => {
        navigator.clipboard.writeText(text).then(
          () => {
            setCopyButtonText("Copied");
            setTimeout(() => setCopyButtonText("Copy"), 1000);
          },
          (err) => console.error("Failed to copy text:", err)
        );
        showAlert("Text copied to clipboard", "success")
      };
  
    const containerStyle = {
      backgroundColor: themeConfig[theme].backgroundColor,
      color: themeConfig[theme].color,
      border: `1px solid ${themeConfig[theme].color}`,
      padding: '10px',
      borderRadius: '5px',
    };
    const newColor = (rgb, factor) => {
        // Split the RGB string into its components
        const [r, g, b] = rgb.match(/\d+/g).map(Number);
        
        // Apply the factor to darken the color
        const newR = Math.max(0, Math.min(255, r * factor));
        const newG = Math.max(0, Math.min(255, g * factor));
        const newB = Math.max(0, Math.min(255, b * factor));
        
        return `rgb(${newR}, ${newG}, ${newB})`;
      };
      const wordarray = text.split(/\s+/).filter((word) => word);
  
    return (
      <div style={containerStyle}>
        <h2>{heading}</h2>
        <textarea
          className="form-control"
          style={{
            backgroundColor: newColor(themeConfig[theme].backgroundColor, 1.4),
            color: themeConfig[theme].color
          }}
          value={text}
          onChange={handleOnChange}
          rows="8"
        ></textarea>
        <button disabled= {wordarray.length===0} className="btn btn-primary my-2 mx-1" onClick={handleUppercase}>
          Convert to Uppercase
        </button>
        <button disabled= {wordarray.length===0} className="btn btn-secondary my-2 mx-1" onClick={handleLowercase}>
          Convert to Lowercase
        </button>
        <button disabled= {wordarray.length===0} className="btn btn-danger my-2 mx-1" onClick={handleClearText}>
          Clear Text
        </button>
        <button disabled= {wordarray.length===0} className="btn btn-warning my-2 mx-1" onClick={handleRemoveExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button disabled= {wordarray.length===0} className="btn btn-success my-2 mx-1" onClick={handleCopyToClipboard}>
          {copyButtonText}
        </button>
        <p>
          <b>Preview:</b> {text}
        </p>
        <p>
          <b>Word Count:</b> {wordarray.length}
        </p>
        <p>
          <b>Reading Time:</b> {formatTime(Math.ceil(wordarray.length * 0.4))}
        </p>
      </div>
    );
  }