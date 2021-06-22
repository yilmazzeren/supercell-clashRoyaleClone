import React from "react";
import hero_bg_clashroyale from "../../bg-image/hero_bg_clashroyale.jpg";
import "./Layout.css";
import ReactPlayer from "react-player";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

function Layout() {
  return (
    <div>
      <div className="section1">
        <img alt="img" src={hero_bg_clashroyale}></img>
      </div>
      <div className="section2">
        <img
          alt="s1"
          src="https://cdn.supercell.com/supercell.com/210601070733/all/themes/supercell/img/18/bg_intro_clashroyale.jpg"
        ></img>

        <div className="section2-body">
          <h2>EPIC REAL-TIME CARD BATTLES</h2>
          <p>
            Clash Royale is a real-time multiplayer game starring the Royales,
            your favourite Clash characters and much, much more. Collect and
            upgrade dozens of cards featuring the Clash of Clans troops, spells
            and defenses you know and love, as well as the Royales: Princes,
            Knights, Baby Dragons and more. Knock the enemy King and Princesses
            from their towers to defeat your opponents and win Trophies, Crowns
            and glory in the Arena.
          </p>
        </div>
      </div>
      <div className="section3">
        <img
          src="https://cdn.supercell.com/supercell.com/210618111952/all/themes/supercell/img/18/bg_social_clashroyale.png"
          alt=""
        />
        <div className="section3-body">
          <h3 style={{ color: "white", fontWeight: "bold", fontSize: "25px" }}>
            SEE THE LATEST
          </h3>
          <p style={{ fontWeight: "200" }}>
            To stay on top of your game, keep an eye on the in-game News
            section. Follow us on social media for the latest chatter and sneak
            peeks on what the team is working on. Don’t be a stranger and join
            the conversation.
          </p>
          <p style={{ fontWeight: "bold", fontSize: "10px" }}>
            FOLLOW CLASH ROYALE ON
          </p>
        </div>
      </div>
      <div style={{ marginBottom: "50px" }}>
        <Carousel plugins={["arrows"]}>
          <ReactPlayer url="https://www.youtube.com/watch?v=2SqviHphY8A" />
          <ReactPlayer url="https://www.youtube.com/watch?v=FBRWUwm0_gY" />

          <ReactPlayer url="https://www.youtube.com/watch?v=4Jdp_dkduJc" />
          <ReactPlayer url="https://www.youtube.com/watch?v=TJryIc0Cwy4" />
          <ReactPlayer
            style={{ marginRight: "25px" }}
            url="https://www.youtube.com/watch?v=zbVa7koGVQY"
          />
          <ReactPlayer url="https://www.youtube.com/watch?v=F4AmkFBJFTA" />
        </Carousel>
      </div>
    </div>
  );
}

export default Layout;
