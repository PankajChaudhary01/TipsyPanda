import React from 'react'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import { useEffect, useState } from 'react';
const config = {
    cUrl: "https://api.countrystatecity.in/v1/countries",
    ckey: "NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA=="
};

export default function Address() {
    const navigate=useNavigate();
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedState, setSelectedState] = useState("");

    useEffect(() => {
        fetch(config.cUrl, { headers: { "X-CSCAPI-KEY": config.ckey } })
            .then(response => response.json())
            .then(data => setCountries(data))
            .catch(error => console.error("Error loading countries:", error));
    }, []);

    const loadStates = (countryCode) => {
        setSelectedCountry(countryCode);
        setStates([]);
        setCities([]);
        fetch(`${config.cUrl}/${countryCode}/states`, { headers: { "X-CSCAPI-KEY": config.ckey } })
            .then(response => response.json())
            .then(data => setStates(data))
            .catch(error => console.error("Error loading states:", error));
    };

    const loadCities = (stateCode) => {
        setSelectedState(stateCode);
        setCities([]);
        fetch(`${config.cUrl}/${selectedCountry}/states/${stateCode}/cities`, { headers: { "X-CSCAPI-KEY": config.ckey } })
            .then(response => response.json())
            .then(data => setCities(data))
            .catch(error => console.error("Error loading cities:", error));
    };

    function sub(){
            navigate("/payment")
    }
    return (
        <div class="container mt-5">
            <div class="card p-4 shadow-sm">
                <h4 class="mb-4">Add New Address</h4>

                <div class="btn-group d-flex toggle-btn-group" role="group">
                    <input type="radio" class="btn-check" name="addressType" id="individual" checked required />
                    <label class="btn btn-light" for="individual">Individual</label>

                </div>

                <form class="mt-4" onSubmit={sub}>
                    <div class="mb-3">
                        <label class="form-label">Address Title*</label>
                        <input type="text" class="form-control" placeholder="My Home Address"  required/>
                    </div>

                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Name*</label>
                            <input type="text" class="form-control" placeholder="Enter your FirstName" required />
                        </div>
                        <div class="col-md-6 mb-3">
                            <label class="form-label">Surname*</label>
                            <input type="text" class="form-control" placeholder="Enter your LastName" required />
                        </div>
                    </div>

                    <div class="mb-3">
                        <label class="form-label">Phone*</label>
                        <input type="text" class="form-control" placeholder="9XXXX 6XXXX" required />
                    </div>

                    <div class="row">
                        <div class="col-md-4 mb-3">
                            <label class="form-label">Town/City*</label>
                            <select disabled={!cities.length} className='form-select'  required>
                                <option value="">Select City</option>
                                {cities.map((city) => (
                                    <option key={city.name} value={city.name}>{city.name}</option>
                                ))}
                            </select>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label class="form-label">State*</label>
                            <select onChange={(e) => loadCities(e.target.value)} disabled={!states.length}  className='form-select'  required>
                                <option value="">Select State</option>
                                {states.map((state) => (
                                    <option key={state.iso2} value={state.iso2}>{state.name}</option>
                                ))}
                            </select>
                        </div>
                        <div class="col-md-4 mb-3">
                            <label class="form-label">Country*</label>
                            <select onChange={(e) => loadStates(e.target.value)}  className='form-select'  required>
                                <option value="">Select Country</option>
                                {countries.map((country) => (
                                    <option key={country.iso2} value={country.iso2}>{country.name}</option>
                                ))}
                            </select>
                        </div>

                    </div>

                    <div class="mb-3">
                        <label class="form-label">Address*</label>
                        <textarea class="form-control" rows="2" placeholder="13th Street 47 W 13th Jodhpur 232001"  required></textarea>
                    </div>

                   <button type="submit" class="btn btn-dark w-100">Add Address</button>
                </form>
            </div>
        </div>


    )
}

