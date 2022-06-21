import { useSelector } from "react-redux";
export default function Home() {
  const language = useSelector((state) => state.language.lang);
  return (
    <>
      <div id="home" className="row">

      {language == "en" ? (
              <div class="intro">
              <h1>Movies WebSite</h1>
              <p>see Your Favourite Movies From The Same Place</p>
              <button>Learn More</button>
            </div>  
        ) : (
          <div class="intro">
          <h1>موقع افلام</h1>
          <p>اتفرج على كل افلامك المفضله من نفس المكان</p>
          <button>اعرف أكثر</button>
        </div>
        )}
      </div>

    </>
  );
}