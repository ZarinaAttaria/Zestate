import React from "react";
import "./Team.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Contact from "./Contact";
const Team = () => {
  const teamMembers = [
    {
      name: "Hania",
      role: "CEO",
      photo:
        "https://media.istockphoto.com/id/1206181103/photo/face-of-happy-young-persian-woman-smiling-in-traditional-clothing.jpg?s=612x612&w=0&k=20&c=6Kos894F11JWo5BmnqFladEquUeHTmvv6UK8m4gHJRk=",
    },
    {
      name: "John",
      role: "Sales Director",
      photo:
        "https://t4.ftcdn.net/jpg/02/50/01/11/360_F_250011118_D6GBoap5FdZvc3DBojAPtMTgRQ3D7Y1A.jpg",
    },
    {
      name: "Ali",
      role: "Marketing Manager",
      photo:
        "https://t3.ftcdn.net/jpg/00/60/41/92/360_F_60419295_RsRGqDLkgpf7b0mHzyHfLFOkI7v2eMUw.jpg",
    },
    {
      name: "Michael",
      role: "Property Consultant",
      photo:
        "https://img.freepik.com/free-photo/closeup-young-hispanic-man-casuals-studio_662251-600.jpg",
    },
    {
      name: "David",
      role: "Finance Specialist",
      photo:
        "https://t4.ftcdn.net/jpg/04/44/74/99/360_F_444749923_B0XJTJJRUVlRQHcDeSV1eOG6JjkKdj7Q.jpg",
    },
    {
      name: "Aisha",
      role: "Customer Relations",
      photo:
        "https://media.istockphoto.com/id/1309696402/photo/headshot-of-mid-adult-british-asian-woman-wearing-hijab.jpg?s=612x612&w=0&k=20&c=gX63iUlxK82_9OiAM9KBeHBN8y2yUIupuQquESwkKiw=",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="team-top">
        <h3>MEET THE TEAM</h3>
        <h1>Powered by our people</h1>
        <p>
          At Top Rated Real Estate, our team is made up of passionate and
          knowledgeable professionals dedicated to helping clients navigate the
          world of real estate with confidence. We combine years of experience
          with deep local market insight to provide personalized service and
          smart solutions, whether you're buying, selling, or investing. Our
          commitment to integrity, transparency, and results has earned us the
          trust of our clients, and we take pride in being the team people rely
          on when it matters most.
        </p>
      </div>
      <div className="team-member-container">
        {teamMembers.map((m, index) => (
          <div className="member" key={index}>
            <img className="member-photo" src={m.photo} />
            <div className="member-description">
              <h4>{m.name}</h4>
              <p>{m.role}</p>
            </div>
          </div>
        ))}
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default Team;
