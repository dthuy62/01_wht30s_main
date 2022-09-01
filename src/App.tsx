import Banner from "./components/Banner";
import BannerIntroduction from "./components/BannerIntroduction";
import BannerProduct from "./components/BannerProduct";
import BrandStory from "./components/BrandStory";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Issue from "./components/Issue";
import ProductCollection from "./components/ProductCollection";
import Video from "./components/Video";

function App() {
  return (
    <div className="App">
    <Header />
    <Banner />
    <BannerIntroduction />
    <BannerProduct />
    <ProductCollection />
    <BrandStory />
    <Issue />
    <Video />
    <Footer />
    </div>
  );
}

export default App;
