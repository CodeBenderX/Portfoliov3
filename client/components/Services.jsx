import React from "react";
import service1 from "/src/assets/webDevImage.jpg";
import service2 from "/src/assets/dataManagement.jpg";
import service3 from "/src/assets/UIUX.png";
import "../src/index.css";

const Services = () => {
  const cards = [
    {
      id: 1,
      title: "Web Development",
      description:
        "Create stunning and responsive web solutions tailored to your needs.",
      image: service1,
    },
    {
      id: 2,
      title: "Database Management",
      description:
        "Implement reliable databases to handle your data with ease.",
      image: service2,
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "Design user-friendly interfaces that captivate and engage.",
      image: service3,
    },
  ];

  return (
    <div className="album">
      <div className="services-container">
      <h2 className="services-title">My Services</h2>
        <div className="services-sub-container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {cards.map((card) => (
              <div className="col" key={card.id}>
                <div className="card shadow-sm d-flex flex-column h-100">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="bd-placeholder-img card-img-top"
                    width="100%"
                    height="225"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          <a href="/contact" style={{textDecoration:"none", color:"black"}}>Contact Me</a>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
