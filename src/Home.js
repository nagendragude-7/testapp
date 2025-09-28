import { addition } from "./reuseable/addition";
function Home() {
  const val=addition(20,10)

  return (
    <div>
      <h2 style={{ color: "white", textShadow: "2px 2px 4px rgba(0,0,0,0.5)", textAlign: "center", padding: "20px" }}>🏠 Home Page {val}</h2>
    </div>
  );
}
export default Home;