import React from 'react'
import axios from 'axios'
import '../Stylesheets/ContactForm.css'
import $ from "jquery";

const ContactForm = () => {

    $(document).ready(function () {

        $('#submitButton').click(function (e) {
            e.preventDefault()
            formValidate()
        })

        function formValidate() {
            const FirstName = $('#firstName').val();
            const LastName = $('#lastName').val();
            const Email = $('#email').val();
            const Phone = $('#phone').val();
            const Budget = $('#budget').val();
            const Description = $('#description').val();

            let isValid = true;

            function showError(elementId, errorMessage) {
                let errorElement = $(elementId);
                errorElement.text(errorMessage);
                isValid = false;
            }

            function clearError(elementId) {
                let errorElement = $(elementId);
                errorElement.text("");
                isValid = true; // Mark the form as valid when error is cleared
            }

            function validateEmail(email) {
                var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                return emailPattern.test(email);
            }

            FirstName === '' ? showError("#firstNameError", "Complete this required field") : clearError('#firstNameError')

            LastName === '' ? showError("#lastNameError", "Complete this required field") : clearError('#lastNameError')

            if (Email === "") {
                showError("#emailError", "Please enter your email address.");
            } else if (!validateEmail(Email)) {
                showError("#emailError", "Please enter a valid email address.");
            } else {
                clearError("#emailError");
            }

            Phone === '' ? showError("#phoneError", "Complete this required field") : clearError('#phoneError')

            if (Budget === '' || Budget == null) {
                showError("#budgetError", "Select from above field")
            } else {
                clearError('#budgetError')
            }

            Description === '' ? showError("#descriptionError", "Complete this required field") : clearError('#descriptionError')

            if (isValid) {
                let data = {
                    'fname': FirstName,
                    'lname': LastName,
                    'email': Email,
                    'phone': Phone,
                    'budget': Budget,
                    'description': Description,
                }

                var config = {
                    method: 'post',
                    url: 'http://3.7.81.243:3253/api/contact/send',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    data: data
                };

                axios(config)
                    .then(function (response) {
                        console.log(response.data.message, "In Response");
                    })
                    .catch(function (error) {
                        console.log(error);
                    });

                console.log(data);
            } else {
                console.log('Contact data is missing.');
            }

        }

    })

    return (
        <div className='ContactForm' id='Contact-us'>
            <div className="ContactFormInner">
                <p>
                    <small>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua</small>
                </p>
                <form >
                    <div className="FormFields">
                        <div className="PersonDetails">
                            <input type="text" name="fistName" id="firstName" placeholder='First Name' />
                            <span id="firstNameError" className="error"></span>
                        </div>
                        <div className="PersonDetails">
                            <input type="lastName" id='lastName' placeholder='Last Name' />
                            <span id="lastNameError" className="error"></span>
                        </div>
                        <div className="PersonDetails">
                            <input type="email" name="email" id="email" placeholder='Email' />
                            <span id="emailError" className="error"></span>
                        </div>
                        <div className="PersonDetails">
                            <input type="tel" name="phone" id="phone" placeholder='Phone' />
                            <span id="phoneError" className="error"></span>
                        </div>
                        <div className="PersonDetails">
                            <select name="budget" id="budget">
                                <option value="">Select Budget</option>
                                <option value="Option1">Option1</option>
                                <option value="Option2">Option2</option>
                                <option value="Option3">Option3</option>
                            </select>
                            <span id="budgetError" className="error"></span>
                        </div>
                        <div className="PersonDetails">
                            <input type="text" name="description" id="description" placeholder='Description' />
                            <span id="descriptionError" className="error"></span>
                        </div>
                        <button className='submitButton' id='submitButton'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm