import "./Home.css";
import homeImage from "../images/home-page-image.jpg";

function Home() {
  return (
    <section className="home-body">
      <div className="home-text">
        <h1 className="home-h1">Zeb's Great Outdoor's</h1>
        <p className="home-p">
          Welcome to your one stop shop for the best equipment!
        </p>
      </div>

      <img className="home-image" src={homeImage} />
    </section>
  );
}

export default Home;
