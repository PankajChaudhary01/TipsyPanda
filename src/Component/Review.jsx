import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import if using icons (optional, but good for stars etc later)

const Review = () => {
  return (
    // Changed background slightly if needed, or keep text-dark
    <div className="bg-light py-5" id="reviews">
      <div className="container">
        <div className="text-center mb-5">
          {/* Changed Heading */}
          <h2 className="fw-bold display-5">Cheers From Our Customers</h2>
          <p className="lead text-muted">See what fellow enthusiasts are saying.</p>
        </div>

        <div className="row gy-4 justify-content-center"> {/* Added justify-content-center */}
          {reviews.map((review, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 d-flex"> {/* Added d-flex for consistent height with card */}
              {/* Removed h-100 from card, using flexbox column on parent instead */}
              <div className="card border-0 shadow-sm flex-fill"> {/* Added flex-fill & shadow-sm */}
                <div className="card-body p-4 d-flex flex-column"> {/* Added d-flex flex-column */}
                  <div className="d-flex align-items-center mb-3">
                    <img
                      src={review.image}
                      alt={`${review.name}'s avatar`} // Improved alt text
                      className="rounded-circle me-3 border" // Added subtle border
                      width="50" // Slightly larger image
                      height="50"
                      loading="lazy"
                    />
                    <div className="flex-grow-1"> {/* Ensures name/role takes space */}
                      <h6 className="mb-0 fw-semibold">{review.name}</h6>
                      <small className="text-muted">{review.role}</small>
                    </div>
                     {/* Optional: Add star rating display */}
                     {review.rating && (
                        <div className="ms-auto text-warning">
                            {[...Array(5)].map((_, i) => (
                                <i key={i} className={`bi ${i < review.rating ? 'bi-star-fill' : 'bi-star'} `}></i>
                            ))}
                        </div>
                     )}
                  </div>
                  {/* Added subtle quote marks */}
                  <blockquote className="blockquote mb-0 text-secondary fs-6 flex-grow-1"> {/* flex-grow-1 pushes footer down */}
                     <p><i className="bi bi-quote me-1"></i>{review.text}</p>
                  </blockquote>
                  {/* Optional Footer Example */}
                  {/* <footer className="blockquote-footer mt-2 mb-0">{review.name}</footer> */}
                </div>
                {/* Optional footer outside body */}
                {/* <div className="card-footer bg-transparent border-top-0 text-end text-muted small pt-1 pb-2">
                    Reviewed: {review.date || 'Recently'}
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Updated Sample Reviews for a Liquor Website ---
const reviews = [
  {
    name: "Mark T.",
    role: "Whiskey Enthusiast",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5, // Added optional rating
    text:
      "Incredible selection of single malts I couldn't find locally. Site was easy to navigate, descriptions were helpful, and my order arrived perfectly packaged and surprisingly fast!",
  },
  {
    name: "Sarah L.",
    role: "Gift Buyer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text:
      "Needed a nice bottle of champagne for an anniversary gift. They had a great variety, good prices, and the expedited shipping option saved the day. Beautifully presented too.",
  },
  {
    name: "Alex P.",
    role: "Home Bartender",
    image: "https://randomuser.me/api/portraits/lego/1.jpg", // Using lego for variety
    rating: 4,
    text:
      "Great source for unique bitters and liqueurs to up my cocktail game. Their prices on standard spirits are competitive too. Only wish they had more craft gin options.",
  },
  {
    name: "Chloe B.",
    role: "Wine Lover",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    text:
      "Appreciate the curated selection of regional wines. Found a fantastic Cabernet Franc based on their recommendation feature. Customer service chat was helpful too!",
  },
  {
    name: "David R.",
    role: "Event Planner",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 5,
    text:
      "Ordered spirits and wine in bulk for a corporate event. Their volume pricing was excellent, and the delivery coordination was smooth. Everything arrived correct and on time.",
  },
  {
    name: "Maya S.",
    role: "Regular Customer",
    image: "https://randomuser.me/api/portraits/women/19.jpg",
    rating: 5,
    text:
      "My go-to for years! Always reliable, website is simple to use, and I appreciate the occasional special offers they send out. Consistent quality and service.",
  },
];

export default Review;