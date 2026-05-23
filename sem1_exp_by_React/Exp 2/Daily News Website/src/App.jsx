import "./App.css";

function App() {
  return (
    <div>

     
      <div className="name-box">
        <h2>Created By: Prachi Choudhary</h2>
      </div>

      <div className="container">

        <h1>Daily News</h1>
        <p>
          <b>Your Trusted Source for Latest Updates</b>
        </p>

        <hr />

        {/* Navigation */}
        <nav>
          <a href="#home">Home</a> |
          <a href="#world"> World</a> |
          <a href="#politics"> Politics</a> |
          <a href="#business"> Business</a> |
          <a href="#technology"> Technology</a> |
          <a href="#sports"> Sports</a> |
          <a href="#contact"> Contact Us</a>
        </nav>

        <hr />

        {/* Main News */}
        <h2 id="home">Top Story: Green City Initiative</h2>

        <p>
          The city council has approved a major{" "}
          <b>Green Infrastructure Plan</b> to improve sustainability and
          reduce pollution.
        </p>

        <p>
          Read the full report on:
          <a href="https://www.bbc.com/news" target="_blank">
            {" "}BBC News
          </a>
          ,
          <a href="https://www.reuters.com/" target="_blank">
            {" "}Reuters
          </a>
          , or
          <a href="https://www.cnn.com/" target="_blank">
            {" "}CNN
          </a>
        </p>

        {/* Main Image */}
        <img
          src="https://images.unsplash.com/photo-1506869640319-fe1a24fd76ac?q=80&w=1600&auto=format&fit=crop"
          alt="City Environment"
          className="main-image"
        />

        {/* YouTube Video */}
        <h3>Watch the Full Report:</h3>

        <iframe
          width="500"
          height="280"
          src="https://www.youtube.com/embed/aqz-KE-bpKQ"
          title="YouTube video"
          allowFullScreen
        ></iframe>

        {/* Audio */}
        <h3>Listen to Today's News Briefing:</h3>

        <audio controls>
          <source
            src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
            type="audio/mpeg"
          />
        </audio>

        {/* Related Articles */}
        <h3>Related Articles:</h3>

        <ul>
          <li>
            <a
              href="https://www.theguardian.com/international"
              target="_blank"
            >
              How cities are adapting to climate change - The Guardian
            </a>
          </li>

          <li>
            <a
              href="https://www.nationalgeographic.com/environment/article"
              target="_blank"
            >
              Urban nature and sustainability - National Geographic
            </a>
          </li>

          <li>
            <a
              href="https://economictimes.indiatimes.com/"
              target="_blank"
            >
              Green projects and job opportunities - Economic Times
            </a>
          </li>
        </ul>

        {/* Gallery */}
        <h3>Photo Gallery:</h3>

        <div className="gallery">
          <img
            src="https://images.unsplash.com/photo-1520975915575-2f1f9e456ca8?q=80&w=800&auto=format&fit=crop"
            alt="Park"
          />

          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=800&auto=format&fit=crop"
            alt="Planning"
          />

          <img
            src="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=800&auto=format&fit=crop"
            alt="Transit"
          />

          <img
            src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop"
            alt="Community"
          />
        </div>

        <hr />

        {/* Footer */}
        <footer>
          <p>
            2025 Daily News |
            <a href="#privacy"> Privacy Policy </a>|
            <a href="#terms"> Terms of Use</a>
          </p>
        </footer>

      </div>
    </div>
  );
}

export default App;