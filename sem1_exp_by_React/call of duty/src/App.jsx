import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('Home');

  // Navbars dynamically class handle karega fixed scrolling ke liye
  const isHome = currentPage === 'Home';
  const isCharacter = currentPage === 'Characters';

  return (
    <div>
      {/* ================= NAVBAR ================= */}
      <nav className={isHome ? 'nav-fixed' : ''}>
        {['Home', 'About', 'Modes', 'Weapons', 'Characters'].map((page) => (
          <button
            key={page}
            className={currentPage === page ? 'active' : ''}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}
      </nav>

      {/* ================= PAGE ROUTING ================= */}
      
      {/* 1. HOME PAGE */}
      {currentPage === 'Home' && (
        <div>
          <div className="hero-home">
            <h1>CALL OF DUTY</h1>
            <p>Step into the battlefield and dominate the war zone.</p>
            <button className="btn" onClick={() => setCurrentPage('Modes')}>Start Mission</button>
          </div>

          <section className="features">
            <h2>Game Highlights</h2>
            <div className="cards">
              <div className="card">
                <img src="https://i.ytimg.com/vi/9z8yMIMn3fI/maxresdefault.jpg" alt="Multiplayer" />
                <h3>Multiplayer Battles</h3>
                <p>Compete with players worldwide in intense online matches.</p>
              </div>
              <div className="card">
                <img src="https://bnetcmsus-a.akamaihd.net/cms/gallery/HNP0TIUILKJH1668450306268.jpg" alt="Battle Royale" />
                <h3>Battle Royale</h3>
                <p>Survive till the end in large-scale war zones.</p>
              </div>
              <div className="card">
                <img src="https://insider-gaming.com/wp-content/uploads/2023/11/world-at-war-zombies-order-of-release-1024x576.jpeg" alt="Zombies" />
                <h3>Zombie Mode</h3>
                <p>Fight against waves of dangerous undead enemies.</p>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* 2. ABOUT PAGE */}
      {currentPage === 'About' && (
        <div style={{ paddingBottom: '60px' }}>
          <div className="hero-about">
            <h1>About The Game</h1>
          </div>

          <div className="section">
            <img src="https://scx2.b-cdn.net/gfx/news/hires/2013/realisticwar.jpg" alt="Realistic War" />
            <div className="text">
              <h2>Realistic Warfare</h2>
              <p>Call of Duty is one of the most popular first-person shooter game series in the world. It is known for realistic war environments, powerful weapons and intense missions.</p>
            </div>
          </div>

          <div className="section">
            <div className="text">
              <h2>Global Popularity</h2>
              <p>The game features multiplayer battles, campaign missions and battle royale mode. Millions of players compete online daily.</p>
            </div>
            <img src="https://img.decrypt.co/insecure/rs:fit:3840:0:0:0/plain/https://cdn.decrypt.co/wp-content/uploads/2024/05/COD-UNREDACTED-004-gID_7.jpg@webp" alt="Global Content" />
          </div>

          <div className="timeline">
            <h2>Game Evolution</h2>
            <div className="year-box">
              <h3>2003</h3>
              <p>First Call of Duty game released.</p>
            </div>
            <div className="year-box">
              <h3>2019</h3>
              <p>Modern Warfare reboot launched.</p>
            </div>
            <div className="year-box">
              <h3>2020</h3>
              <p>Battle Royale Warzone introduced.</p>
            </div>
          </div>
        </div>
      )}

      {/* 3. MODES PAGE */}
      {currentPage === 'Modes' && (
        <div className="body-modes">
          <h1>Game Modes</h1>
          <div className="container-modes">
            <div className="mode">
              <img src="https://i.ytimg.com/vi/9z8yMIMn3fI/maxresdefault.jpg" alt="Multiplayer" />
              <h2>Multiplayer Mode</h2>
              <p>Compete online with players worldwide in intense battles.</p>
            </div>
            <div className="mode">
              <img src="https://bnetcmsus-a.akamaihd.net/cms/gallery/HNP0TIUILKJH1668450306268.jpg" alt="Battle Royale" />
              <h2>Battle Royale</h2>
              <p>Survive till the end in a massive open battlefield.</p>
            </div>
            <div className="mode">
              <img src="https://insider-gaming.com/wp-content/uploads/2023/11/world-at-war-zombies-order-of-release-1024x576.jpeg" alt="Zombie Mode" />
              <h2>Zombie Mode</h2>
              <p>Fight against waves of dangerous zombies.</p>
            </div>
            <div className="mode">
              <img src="https://i.ytimg.com/vi/zu3wZ-_IKrM/maxresdefault.jpg" alt="Campaign" />
              <h2>Campaign Mode</h2>
              <p>Experience a story-driven war mission journey.</p>
            </div>
          </div>
        </div>
      )}

      {/* 4. WEAPONS PAGE */}
      {currentPage === 'Weapons' && (
        <div className="body-weapons">
          <h1>Weapons Arsenal</h1>
          <div className="container-weapons">
            <div className="weapon">
              <img src="https://d1lss44hh2trtw.cloudfront.net/resize?type=webp&url=https%3A%2F%2Fshacknews-www.s3.amazonaws.com%2Fassets%2Feditorial%2F2025%2F10%2Fcall-of-duty-black-ops-6-m15-mod-0-assault-rifle.jpg&width=986&sign=B37Qtv0N9ovlt6wrG9n-oszJkrbyz_c613sVVpDi8nE" alt="Assault Rifle" />
              <h3>Assault Rifle</h3>
              <p>Balanced weapon for mid-range combat.</p>
            </div>
            <div className="weapon">
              <img src="https://ik.imagekit.io/0eqydxstn/Pelington_703_QuaSOZus3.jpg" alt="Sniper Rifle" />
              <h3>Sniper Rifle</h3>
              <p>High damage long-range weapon.</p>
            </div>
            <div className="weapon">
              <img src="https://assetsio.gnwcdn.com/marine-sp.jpg?width=690&quality=85&format=jpg&dpr=3&auto=webp" alt="Shotgun" />
              <h3>Shotgun</h3>
              <p>Deadly in close-range battles.</p>
            </div>
            <div className="weapon">
              <img src="https://bnetcmsus-a.akamaihd.net/cms/content_folder_media/NQCNTIKNUSTY1587425887442.jpg" alt="Pistol" />
              <h3>Pistol</h3>
              <p>Compact and fast secondary weapon.</p>
            </div>
          </div>
        </div>
      )}

      {/* 5. CHARACTERS PAGE */}
      {currentPage === 'Characters' && (
        <div className="body-characters">
          <h1>Choose Your Character</h1>
          <div className="characters-grid">
            <div className="char-card">
              <img src="https://w0.peakpx.com/wallpaper/878/820/HD-wallpaper-ghost-duty-price-call-soup.jpg" alt="Ghost" />
              <h3>Captain Ghost</h3>
              <p>Expert in stealth and tactical combat.</p>
              <button>Select</button>
            </div>
            <div className="char-card">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ46EhpxSXD9J-oBfqIAy0HijwhaQN5Wm_iA&s" alt="Blaze" />
              <h3>Sergeant Blaze</h3>
              <p>Heavy weapons specialist and frontline fighter.</p>
              <button>Select</button>
            </div>
            <div className="char-card">
              <img src="https://gaming-cdn.com/images/news/articles/11866/cover/two-more-call-of-duty-and-tony-hawk-s-pro-skater-1-2-could-be-coming-soon-to-game-pass-cover67f8e16150524.jpg" alt="Hawker" />
              <h3>Sniper Hawker</h3>
              <p>Long-range sniper with deadly accuracy.</p>
              <button>Select</button>
            </div>
          </div>
        </div>
      )}

      {/* ================= FOOTER ================= */}
      <footer className={isCharacter ? '' : 'footer-fixed'}>
        @ 2026 Project | Made by <span className="myname">Prachi Choudhary</span>
      </footer>
    </div>
  );
}