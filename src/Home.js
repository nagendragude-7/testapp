import homeImage from './assets/1.jpeg';

function Home() {
  // Define a style object for the images
  const imageStyle = {
    width: "250px", // A fixed width
    height: "auto", // Maintain aspect ratio
    margin: "10px", // Add some space around the images
    borderRadius: "8px", // Optional: Add rounded corners
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" // Optional: Add a subtle shadow
  };

  return (
    <div>
      <h2 style={{ color: "white", textShadow: "2px 2px 4px rgba(0,0,0,0.5)", textAlign: "center", padding: "20px" }}>🏠 Home Page</h2>
    </div>
  );
}
export default Home;