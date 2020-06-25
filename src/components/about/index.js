import React from "react";
import "./style.css";

function About() {
  return (
    <section className="about">
      {/* <h1 className="about-h1"> About </h1> */}
      <div className="about-img">
        <img
          className="about-img"
          src="./unnamed-1.png"
          alt="pic of ugly guy"
        ></img>
      </div>
      <div className="about-text">
        <p>
          Meticulous and multidimensional Full Stack Web Developer with a focus
          on Back End development and Database Analysis. Equipped with a strong
          background in sales, client management, and customer facing skills.
          Independent, creative, resourceful, and collaborative team player with
          a strong set of communication, influencing and problem-solving skills.
        </p>
        <p>
          Ever since I embarked on this journey to become a Software Developer
          and writing my first program in JavaScript, I have been impassioned
          with the idea of talking to a computer to solve practical problems.
          From my days in recruitment, I learned that Software Engineering is a
          never-ending puzzle that has the power to transform and improve the
          lives of people all around the world in many different capacities.
        </p>
        <p>
          I bring to the table the relentless drive and work ethic of a 4-year
          starting D1 Football Player, the persistence and creativity of an
          engineering recruiter who has made countless full-time placements with
          some of the top companies across the country, and the endless thirst
          for knowledge, that grows with each and every line of code I write.
        </p>
      </div>
    </section>
  );
}

export default About;
