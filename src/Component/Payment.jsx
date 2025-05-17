import React from 'react'
import {useNavigate} from 'react-router-dom'
import logo from '../Images/imgcards.png'
export default function Payment() {
    const navigate=useNavigate();
    function sub(){
        navigate("/ThankYou")
}
    return (
        <div class="container ">
            <form action="" onSubmit={sub}>
                <div className="row my-5"></div>
                <div class="row">
                    <div className="col-sm-4"></div>
                    <div class="col-md-4">
                        <h3 class="text-center">Payment</h3>
                        <div class="mb-3">
                            <label class="form-label">Cards Accepted:</label>
                            <img src={logo} alt="" class="img-fluid" />
                        </div>
                        <div class="mb-3">
                            <label for="cardName" class="form-label">Name On Card:</label>
                            <input type="text" class="form-control" id="cardName" placeholder="Mr. Jacob Aiden" required />
                        </div>
                        <div class="mb-3">
                            <label for="cardNumber" class="form-label">Credit Card Number:</label>
                            <input type="number" class="form-control" id="cardNumber" placeholder="1111 2222 3333 4444" required />
                        </div>
                        <div class="mb-3">
                            <label for="expMonth" class="form-label">Exp. Month:</label>
                            <input type="text" class="form-control" id="expMonth" placeholder="August" required/>
                        </div>
                        <div class="row">
                            <div class="col">
                                <div class="mb-3">
                                    <label for="expYear" class="form-label">Exp. Year:</label>
                                    <input type="number" class="form-control" id="expYear" placeholder="2025" required />
                                </div>
                            </div>
                            <div class="col">
                                <div class="mb-3">
                                    <label for="cvv" class="form-label">CVV:</label>
                                    <input type="number" class="form-control" id="cvv" placeholder="123" required />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4"></div>
                </div>

                <div className="button text-center">
                   <button type="submit" class="btn btn-primary btn-lg">Submit</button>
                </div>
            </form>
        </div>


    )
}
