import hero from "../assets/hero.png";
import iphone from "../assets/iphone.png";
import samsung from "../assets/samsung.png";
import macbook from "../assets/macbook.png";

import ProductCard from "../components/ProductCard";

import "./HomePage.css";

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-left">
          <h1>Shop Smarter with SmartCart</h1>

          <p>
            Discover the latest smartphones, laptops,
            and gadgets at unbeatable prices.
          </p>

          <button>🛍️ Shop Now</button>
        </div>

        <div className="hero-right">
          <img src={hero} alt="Shopping" />
        </div>
      </div>

      {/* Categories Section */}
      <div className="categories">
        <h2>Shop by Category</h2>

        <div className="category-container">
          <div className="category-card">
            📱
            <h3>Mobiles</h3>
          </div>

          <div className="category-card">
            💻
            <h3>Laptops</h3>
          </div>

          <div className="category-card">
            🎧
            <h3>Headphones</h3>
          </div>

          <div className="category-card">
            ⌚
            <h3>Smart Watches</h3>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="featured">
        <h2>🔥 Featured Products</h2>

        <div className="featured-container">
          <ProductCard
            image={iphone}
            name="iPhone 16"
            price={80000}
          />

          <ProductCard
            image={samsung}
            name="Samsung Galaxy S25"
            price={70000}
          />

          <ProductCard
            image={macbook}
            name="MacBook Air M4"
            price={100000}
          />
        </div>
      </div>
    </>
  );
}

export default HomePage;