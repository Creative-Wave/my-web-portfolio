import { useState, useEffect } from "react";
import AnimatedCursor from "react-animated-cursor";
import Display from "@/components/Display";
import Navbar from "@/components/Navbar";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [isDesktop, setIsDesktop] = useState(true);

  // Detect screen width to enable/disable cursor for mobile
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768); // Adjust the width as needed for mobile breakpoint
    };

    handleResize(); // Call initially to set state based on initial load
    window.addEventListener("resize", handleResize); // Add resize listener

    return () => window.removeEventListener("resize", handleResize); // Cleanup listener on unmount
  }, []);

  // Simulate a loading delay (can be removed if loading depends on data fetching)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust this time as per your need

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        // Preloader with image and animated cursor
        <div style={styles.loaderContainer}>
          <img
            src="1490.gif" // Update with your preloader image path
            alt="Loading..."
            style={styles.loaderImage}
          />
          {/* Only show the cursor on desktop */}
          {isDesktop && (
            <AnimatedCursor
              innerSize={8}
              outerSize={44}
              color="255, 0, 0" // Red color (use RGB values)
              outerAlpha={0.2}
              innerScale={1}
              outerScale={1.5}
            />
          )}
        </div>
      ) : (
        <>
          {/* Display component */}
          <Display />
          {/* Only show the cursor on desktop */}
          {isDesktop && (
            <AnimatedCursor
              innerSize={8}
              outerSize={44}
              color="0, 150, 136" // Teal color for after loading (customizable)
              outerAlpha={0.3}
              innerScale={1}
              outerScale={1.5}
            />
          )}
        </>
      )}
    </>
  );
};

// Inline styles for the preloader (You can move this to your CSS file)
const styles = {
  loaderContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Full screen height
    backgroundColor: "#f0f0f0", // Adjust background color if needed
  },
  loaderImage: {
    width: "50px", // Adjust size as needed
    height: "auto",
  },
};

export default Index;
