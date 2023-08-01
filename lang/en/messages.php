<?php

return [
    'alerts' => [
        'reservation' => [
            'success' => 'Your reservation has been created.',
            'error' => 'Sorry, no spots are left, try another date.',
        ],
    ],

    'titles' => [
        'welcome' => 'Welcome to the Park',
        'reservation' => 'Create a Reservation',
        'daypass' => 'Great to See You Again!',
        'checkIn' => 'Register Your Entrance',
        'language' => 'Select a Language',
    ],

    'statements' => [
        'register' => 'Please enter your information to register.',
        'checkIn' => 'Enter the email you used to make your reservation.',
    ],

    'footers' => [
        'index' => [
            'language' => 'Want to switch languages?',
            'toLanguage' => 'Click Here!',
        ],

        'register' => [
            'reservation' => 'Already have an account?',
            'toReservation' => 'Book a spot!',
        ],

        'reservation' => [
            'register' => 'Don\'t have an account yet?',
            'toRegister' => 'Register!',
        ],

        'checkIn' => [
            'reservation' => 'Don\'t have a reservation yet?',
            'toReservation' => 'Book a spot!',
        ],
    ],

    'buttons' => [
        'register' => 'Register',
        'book' => 'Book a Space',
        'check' => 'Check In',
        'join' => 'Join',
        'reservation' => 'Make a Reservation',
        'language' => 'Save',
    ],

    'labels' => [
        'register' => [
            'firstName' => 'First Name',
            'lastName' => 'Last Name',
            'email' => 'Email Address',
            'birthDate' => 'Date of Birth',
            'contactName' => 'Emergency Contact Name',
            'contactNumber' => 'Emergency Contact Phone',
            'picture' => 'Upload Your Picture',
        ],

        'reservation' => [
            'email' => 'Enter your email account',
            'date' => 'Pick a Date',
        ],
    ],

    'redirect' => [
        'register' => [
            'success' => 'Your user has been created.',
            'error' => 'Sorry, something went wrong, try again.',
        ],
    ],

    'validation' => [
        'checkReservation' => [
            'email' => 'There is no reservation associated with this email',
        ],

        'storeReservationRequest' => [
            'email' => 'This email is not associated with a registered account',
            'date' => 'Select a valid date within this month',
        ],

        'storeUserRequest' => [
            'first_name' => 'Enter a valid name',
            'last_name' => 'Enter a valid last name',
            'email' => 'Enter a valid email address',
            'date_of_birth' => 'Enter a valid date of birth',
            'emergency_contact_name' => 'Enter a valid name',
            'emergency_contact_number' =>  'Enter a valid phone number',
            'photo' => 'Select a photograph of yourself',
        ],
    ],
];
