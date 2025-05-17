import React from 'react'

export default function MyMap() {
    return (
        <div class="bg-light py-5">
        <div class="container">
            <h2 class="text-center mb-4 mb-md-5">Our Location</h2>
      
            <div class="row align-items-center justify-content-center g-4 g-lg-5">
      
                <div class="col-lg-5 text-center text-lg-start">
                    <h3 class="h4 mb-3">Connect With Us</h3>
                    <p class="lead mb-4">
                        Stop by our office during business hours or use the map to get directions.
                    </p>
                    <address class="mb-4">
                        <strong>Techfly (My Business Name)</strong><br/>
                        123 Innovation Drive, Suite 456<br/>
                        Anytown, CA 98765<br/>
                        <a href="tel:+15551234567" class="text-decoration-none d-block mt-2"><i class="bi bi-telephone me-2"></i>(555) 123-4567</a>
                        <a href="mailto:info@tipsypanda" class="text-decoration-none d-block mt-1"><i class="bi bi-envelope me-2"></i>info@tipsypanda</a>
                    </address>
      
                    <h4 class="h5 mb-3">Hours</h4>
                    <ul class="list-unstyled mb-0">
                        <li><i class="bi bi-calendar-check me-2 text-primary"></i> Mon - Fri: 9am - 5pm</li>
                        <li><i class="bi bi-calendar-x me-2 text-secondary"></i> Sat - Sun: Closed</li>
                    </ul>
                </div>
      
                <div class="col-md-8 col-lg-6">
                    <div class="ratio ratio-4x3 rounded shadow">
                        <iframe
                            src="https://maps.google.com/maps?width=100%&height=100%&hl=en&q=The+Liquor+Mall(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                            style={{border:0}}
                            allowfullscreen=""
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                            title="Office Location Map">
                        </iframe>
                    </div>
                </div>
      
            </div>
        </div>
      </div>
    )
}
