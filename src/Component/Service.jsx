import React from 'react';
import Ai from './Ai';

// --- Data Arrays ---

// Core Services
const servicesData = [
  { id: 1, title: 'Wide Selection', description: 'Vast collection of spirits, wines, beers, and mixers from local gems to international favorites.', iconClass: 'bi bi-collection-fill' },
  { id: 2, title: 'Expert Staff', description: 'Passionate team ready to guide you to the perfect choice for any occasion.', iconClass: 'bi bi-person-badge' },
  { id: 3, title: 'Local Delivery', description: 'Convenient & fast local delivery options available right to your doorstep.', iconClass: 'bi bi-truck' },
  { id: 4, title: 'Special Orders', description: 'Searching for something rare? We\'ll leverage our network to try and find it for you.', iconClass: 'bi bi-search-heart' },
  { id: 5, title: 'Gift Services', description: 'Elegant gift wrapping and custom basket assembly for the perfect present.', iconClass: 'bi bi-gift-fill' },
  { id: 6, title: 'Event Planning', description: 'Bulk orders, volume discounts, and consultations for parties and events.', iconClass: 'bi bi-calendar-event' },
];

// Why Choose Us Highlights
const whyChooseUsData = [
  { id: 1, title: 'Curated Quality', description: 'We hand-select every item, ensuring a premium range that meets our high standards.', iconClass: 'bi bi-award-fill' },
  { id: 2, title: 'Community Focused', description: 'Proudly serving our local community with personalized service and support.', iconClass: 'bi bi-people-fill' },
  { id: 3, title: 'Competitive Prices', description: 'Fair pricing and great value across our entire selection, plus special deals.', iconClass: 'bi bi-tags-fill' }
];

// Featured Liquors (!!! Use actual image URLs !!!)
const featuredLiquorsData = [
  { id: 1, name: 'Rare Cask Whisky', description: 'A limited edition single malt with rich sherry notes and a smooth finish.', imageUrl: 'https://images.unsplash.com/photo-1671713682265-991d47c88b85?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'Whisky' },
  { id: 2, name: 'Artisanal Gin', description: 'Crafted locally with unique botanicals for a distinct and refreshing flavor.', imageUrl: 'https://images.unsplash.com/photo-1622551292569-21e3e9330a85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', category: 'Gin' },
  { id: 3, name: 'Organic Tequila Reposado', description: 'Smooth, aged tequila perfect for sipping or elevating your cocktails.', imageUrl: 'https://images.pexels.com/photos/8148448/pexels-photo-8148448.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', category: 'Tequila' },
  { id: 4, name: 'Vintage Bordeaux Wine', description: 'An exceptional red wine from a renowned vineyard, ideal for special occasions.', imageUrl: 'https://images.unsplash.com/photo-1510267222691-b90c3f0494d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D', category: 'Wine' },
];

// Customer Testimonials
const testimonialsData = [
  { id: 1, quote: "Incredible selection and the staff recommendations are always spot on! My go-to shop.", name: "Alex R." },
  { id: 2, quote: "Their delivery service is a lifesaver! Fast, friendly, and always accurate.", name: "Samantha B." },
  { id: 3, quote: "Found a really hard-to-find bottle here thanks to their special order service. Highly recommend!", name: "Michael T." },
];

// Delivery Areas (Modify with your actual areas)
const deliveryAreasData = {
  primary: ["Jaipur", "Jodhpur", "Udaipur"],
  secondary: ["West End (Extended Zone - Check Eligibility)", "Airport Area (Business only)"],
  zipCodes: ["90210", "90211", "90212", "90215 (Partial)", "90300-90310"]
};

// Franchise Locations (Modify with your actual locations)
const franchiseLocationsData = [
  { id: 1, name: "Jaipur", address: "123 Main St, Cityville, ST 90210", phone: "555-123-4567", mapLink: "#" /* Replace with actual Google Maps link */ },
  { id: 2, name: "Jodhpur", address: "456 Oak Ave, North Suburb, ST 90310", phone: "555-987-6543", mapLink: "#" },
  { id: 3, name: "Udaipur", address: "789 Pine Rd, Eastside District, ST 90215", phone: "555-111-2222", mapLink: "#" },
  // Add more locations as needed
];


// --- The Full Services Page Component ---
function Service() {
  return (
    <> {/* React Fragment */}
      <div className="row my-4"></div>
      {/* Section 1: Hero/Header */}
      <div className="bg-dark text-light py-5 shadow">
        <div className="container text-center">
          <i className="bi bi-stars display-1 text-warning mb-3"></i>
          <h1 className="display-4 fw-bold">Your Premier Beverage Destination</h1>
          <p className="lead mt-3 mb-0">
            Explore exceptional liquors & services tailored for the discerning enthusiast.
          </p>
        </div>
      </div>

      {/* Section 2: Why Choose Us? */}
      <div className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">Why Choose Tipsy?</h2>
          <div className="row g-4 justify-content-center">
            {whyChooseUsData.map((item) => (
              <div key={item.id} className="col-md-6 col-lg-4 text-center">
                <div className="mb-3"><i className={`${item.iconClass} display-5 text-primary`}></i></div>
                <h4 className="fw-semibold mb-2">{item.title}</h4>
                <p className="text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 3: Featured Liquors */}
      <div className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">Featured Selections</h2>
          <p className="text-center text-muted lead mb-5">A glimpse into some of our customer favorites and rare finds.</p>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            {featuredLiquorsData.map((liquor) => (
              <div key={liquor.id} className="col d-flex align-items-stretch">
                <div className="card h-100 shadow-sm border-0 overflow-hidden">
                  <img src={liquor.imageUrl} className="card-img-top" alt={liquor.name} style={{ height: '200px', objectFit: 'cover' }} />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-semibold">{liquor.name}</h5>
                    <p className="card-text small text-muted flex-grow-1">{liquor.description}</p>
                    <span className="badge bg-primary-subtle border border-primary-subtle text-primary-emphasis rounded-pill align-self-start">{liquor.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <a href="" className="btn btn-outline-secondary btn-lg"> {/* Adjust link */}
              <i className="bi bi-grid-3x3-gap-fill me-2"></i> View All Featured Items
            </a>
          </div>
        </div>
      </div>

      {/* Section 4: Core Services Grid */}
      <div className="container py-5">
        <h2 className="text-center mb-5 fw-bold">Our Core Services</h2>
        <div className="row gy-4 gx-lg-5 justify-content-center">
          {servicesData.map((service) => (
            <div key={service.id} className="col-md-6 col-lg-4 d-flex">
              <div className="card shadow-sm text-center h-100 border-0 p-4">
                <div className="card-body d-flex flex-column">
                  <div className="mb-3"><i className={`${service.iconClass} display-4 text-primary`}></i></div>
                  <h5 className="card-title fw-bold mb-3">{service.title}</h5>
                  <p className="card-text text-muted flex-grow-1">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 5: Delivery Areas (New) */}
      <div className="py-5 bg-light"> {/* Subtle info background */}
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Our Delivery Service Areas</h2>
          <div className="row g-4 align-items-center">
            <div className="col-lg-4 text-center">
              <i className="bi bi-geo-alt-fill display-1 text-info mb-3"></i>
              <h4>Check Your Zone</h4>
              <p className="text-muted small">Enter your address during checkout or contact us to confirm delivery eligibility.</p>
              <a href="/delivery-info" className="btn btn-info btn-sm mt-2"> {/* Adjust link */}
                Learn More & Check Eligibility
              </a>
            </div>
            <div className="col-lg-8">
              <h5>Primary Delivery Zones:</h5>
              <ul className="list-unstyled mb-4">
                {deliveryAreasData.primary.map((area, index) => (
                  <li key={`prim-${index}`} className="mb-1">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>{area}
                  </li>
                ))}
              </ul>
              <h5>Secondary/Extended Zones:</h5>
              <ul className="list-unstyled mb-4">
                {deliveryAreasData.secondary.map((area, index) => (
                  <li key={`sec-${index}`} className="mb-1">
                    <i className="bi bi-info-circle-fill text-warning me-2"></i>{area}
                  </li>
                ))}
              </ul>
              <p className="small text-muted">
                <i className="bi bi-upc-scan me-1"></i> Primarily serving Zip Codes: {deliveryAreasData.zipCodes.join(', ')}. Restrictions may apply.
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* Section 6: Tastings & Events */}
      <div className="py-5 bg-primary-subtle">
        <div className="container">
          <div className="row align-items-center justify-content-center g-5">
            <div className="col-lg-5 text-center">
              <i className="bi bi-calendar2-check-fill display-1 text-primary mb-4"></i>
            </div>
            <div className="col-lg-7 text-center text-lg-start">
              <h2 className="fw-bold mb-3">Join Our Tastings & Events</h2>
              <p className="lead">Discover new favorites and deepen your appreciation at our exclusive tasting events.</p>
              <a href="" className="btn btn-primary btn-lg mt-3">
                <i className="bi bi-calendar-event me-2"></i> View Event Calendar
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Section 7: Testimonials */}
      <div className="py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold">What Our Customers Say</h2>
          <div className="row g-4 justify-content-center">
            {testimonialsData.map((testimonial) => (
              <div key={testimonial.id} className="col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body">
                    <p className="fst-italic">
                      <i className="bi bi-quote fs-4 text-muted me-2"></i>
                      {testimonial.quote}
                    </p>
                    <footer className="blockquote-footer mt-3 text-end">
                      {testimonial.name}
                    </footer>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 8: Franchise Locations (New) */}
      <div className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">Visit Our Locations</h2>
          {/* <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-center"> Adapts columns */}
          <div className="row  justify-content-center"> {/* Adapts columns */}
            {franchiseLocationsData.map((location) => (
              <>
                <div className="col-sm-1 "></div>
                <div key={location.id} className="col-sm-3  d-flex align-items-stretch">
                  <div className="card h-100 text-center shadow-sm border-0">
                    <div className="card-body">
                      <i className="bi bi-shop fs-1 text-secondary mb-3"></i> {/* Shop icon */}
                      <h5 className="card-title fw-semibold mb-2">{location.name}</h5>
                      <p className="card-text text-muted small mb-1">{location.address}</p>
                      <p className="card-text text-muted small">
                        <i className="bi bi-telephone-fill me-1"></i>{location.phone}
                      </p>
                      <a href={location.mapLink} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-secondary mt-2">
                        <i className="bi bi-geo-alt-fill me-1"></i> Get Directions
                      </a>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
          {/* Optional: Add a message if there's only one location or for expansion */}
          {/* <p className="text-center text-muted mt-4">More locations coming soon!</p> */}
        </div>
      </div>


      {/* Section 9: Call to Action (CTA) */}
      <div className="py-5 bg-secondary text-light">
        <div className="container text-center">
          <i className="bi bi-telephone-forward-fill display-4 mb-3"></i>
          <h2 className="fw-bold mb-3">Ready to Elevate Your Glass?</h2>
          <p className="lead mb-4">
            Visit us in store, browse online, check delivery, or give us a call!
          </p>
          <a href="" className="btn btn-light btn-lg me-md-3 mb-3 mb-md-0">
            <i className="bi bi-pin-map-fill me-2"></i> Find Us / Contact
          </a>
          <a href="" className="btn btn-warning btn-lg mb-3 mb-md-0">
            <i className="bi bi-bag-fill me-2"></i> Browse Online Store
          </a>
        </div>
      </div>

      {/* <Ai/> */}
    </> // End of React Fragment
  );
}

// --- Export the Component ---
export default Service; 