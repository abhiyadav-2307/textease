import React from "react";

const About = ({ theme, themeConfig }) => {
  const containerStyle = {
    backgroundColor: themeConfig[theme].backgroundColor,
    color: themeConfig[theme].color,
    padding: "20px",
    borderRadius: "10px",
    marginTop: "20px",
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
  return (
    <div className="container " style={containerStyle}>
      <h2 className="my-3">About Us</h2>
      <div className="accordion" id="accordionExample">
      <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed"
              style={{
                backgroundColor: newColor(themeConfig[theme].backgroundColor, 0.7),
                color: themeConfig[theme].color
              }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              <strong>Feature-Packed Text Area</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{
  backgroundColor: newColor(themeConfig[theme].backgroundColor, 1.4),
  color: themeConfig[theme].color
}}>
              TextEase provides a robust text area where users can type or paste their content effortlessly. With its user-friendly interface, you can seamlessly edit your text, ensuring productivity and ease. Whether crafting a document or polishing text, the intuitive text area is your canvas for precision and creativity.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={{
                backgroundColor: newColor(themeConfig[theme].backgroundColor, 0.7),
                color: themeConfig[theme].color
              }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Dynamic Text Utilities</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{
  backgroundColor: newColor(themeConfig[theme].backgroundColor, 1.4),
  color: themeConfig[theme].color
}}>
              Effortlessly manipulate your text with powerful tools that convert to uppercase or lowercase, remove extra spaces, copy content to your clipboard, or clear text entirely. These utilities are designed to streamline text management, helping you complete tasks quickly and efficiently.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={{
                backgroundColor: newColor(themeConfig[theme].backgroundColor, 0.7),
                color: themeConfig[theme].color
              }}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <strong>Customizable Display Themes</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={{
  backgroundColor: newColor(themeConfig[theme].backgroundColor, 1.4),
  color: themeConfig[theme].color
}}>
              Enjoy the freedom to personalize your experience with five display themes: Light, Dark Gray, Dark Blue, Dark Green, and Dare Purple. Each theme is crafted for visual comfort, ensuring TextEase adapts to your preferences and enhances your focus, whether day or night.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
