import React from "react";

const topics = [
  {
    category: "Account Opening",
    icon: <i className="fa fa-plus-circle fa-xs" aria-hidden="true"></i>,
    subtopics: [
      "Online Account Opening",
      "Offline Account Opening",
      "Company, Partnership and HUF Account",
      "NRI Account Opening",
      "Charges at Zerodha",
      "Zerodha IDFC FIRST Bank 3-in-1 Account",
      "Getting Started",
    ],
  },
  {
    category: "Your Zerodha Account",
    icon: <i className="fa-solid fa-user fa-xs"></i>,
    subtopics: [
      "Your Profile",
      "Account modification",
      "Client Master Report (CMR) and DP",
      "Nomination",
      "Transfer and conversion of securities",
    ],
  },
  {
    category: "Kite",
    icon: <i className="fa-solid fa-chart-simple fa-xs"></i>,
    subtopics: [
      "IPO",
      "Trading FAQs",
      "Margin Trading Facility (MTF) and Margins",
      "Charts and orders",
      "Alerts and Nudges",
      "General",
    ],
  },
  {
    category: "Funds",
    icon: <i className="fa-solid fa-filter fa-xs"></i>,
    subtopics: [
      "Add money",
      "Withdraw money",
      "Add bank accounts",
      "eMandates",
    ],
  },
  {
    category: "Console",
    icon: <i className="fa-brands fa-cuttlefish fa-xs"></i>,
    subtopics: [
      "Portfolio",
      "Corporate actions",
      "Funds statement",
      "Reports",
      "Profile",
      "Segments",
    ],
  },
  {
    category: "Coin",
    icon: <i className="fa-solid fa-coins fa-xs"></i>,
    subtopics: [
      "Understanding mutual funds and Coin",
      "Coin app",
      "Coin web",
      "Transactions and reports",
      "National Pension Scheme (NPS)",
    ],
  },
];

const CreateTicket = () => {
  return (
    <div className="container">
      {/* Main Heading */}
      <div className="row p-3 p-md-5 mt-3 mt-md-5 mb-3 mb-md-5">
        <h1 className="fs-2 text-center text-md-start">
          To create a ticket, select a relevant topic
        </h1>
      </div>

      {/* Topics Grid */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 p-3 p-md-5">
        {topics.map((topic, index) => (
          <div key={index} className="col">
            <div className="card h-100 p-3">
              <h4 className="card-title">
                {topic.icon} {topic.category}
              </h4>
              <div className="card-body p-0">
                {topic.subtopics.map((subtopic, subIndex) => (
                  <a
                    key={subIndex}
                    href="#"
                    className="d-block text-decoration-none mb-2"
                  >
                    {subtopic}
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateTicket;
