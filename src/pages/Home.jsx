
import { Link } from "react-router-dom";

function Home() {
  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero-content">
          <p className="hero-label">WELCOME TO SHOPLY</p>

          <h1>
            Find What You Need.
            <span> Love What You Get.</span>
          </h1>

          <p className="hero-description">
            Discover quality products, explore great finds,
            and enjoy a simple shopping experience.
          </p>

          <Link to="/shop" className="shop-button">
            Explore Products
          </Link>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1000"
            alt="Modern clothing and retail store"
          />
        </div>
      </section>

      <section className="home-intro">
        <h2>Shopping Made Simple</h2>
        <p>
          Browse our collection, choose your favourites,
          and add them to your cart. Everything you need
          for a straightforward shopping experience.
        </p>
      </section>
    </main>
  );
}

export default Home;
