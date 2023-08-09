<?php

return [
    'alerts' => [
        'reservation' => [
            'success' => 'Your reservation has been created.',
            'error' => 'Sorry, no spots are left, try another date.',
        ],
    ],

    'titles' => [
        'welcome' => 'Welcome to ' . env('FACILITY_NAME'),
        'reservation' => 'Create a Reservation',
        'daypass' => 'Great to See You Again!',
        'checkIn' => 'Register Your Entrance',
        'language' => 'Select a Language',
    ],

    'statements' => [
        'register' => 'Please enter your information to register.',
        'checkIn' => 'Enter the email you used to make your reservation.',
        'daypass' => 'Present this day pass at the entrance.',
    ],

    'footers' => [
        'index' => [
            'language' => '¿Quieres cambiar de idioma?',
            'toLanguage' => 'Haz clic aquí!',
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
        'accept' => 'Accept',
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
            'email' => 'There is no reservation associated with this email.',
        ],

        'storeReservationRequest' => [
            'email' => 'This email is not associated with a registered account.',
            'date' => 'Select a valid date within this month.',
        ],

        'storeUserRequest' => [
            'first_name' => 'Enter a valid name.',
            'last_name' => 'Enter a valid last name.',
            'email' => 'Enter a valid email address.',
            'date_of_birth' => 'Enter a valid date of birth.',
            'emergency_contact_name' => 'Enter a valid name.',
            'emergency_contact_number' =>  'Enter a valid phone number.',
            'photo' => 'Select a photograph of yourself.',
        ],
    ],

    'termsAndConditions' => [
        'texts' => [
            'welcome' => 'Welcome to ' . env('FACILITY_NAME'),
            'statement' => 'By accessing and using our climbing facilities, you agree to abide by the following rules and conditions.',
            'f1' => env('FACILITY_NAME') . ' & ASSOC do not assume any responsibility or liability for any injuries or accidents that may occur during climbing sessions.',
            'f2' => 'Please be advised that violation of any of these rules may result in a fine of $15.00 or the indefinite banning of the person from our climbing facilities.',
            'f3' => env('FACILITY_NAME') . ' reserves the right to refuse entry or participation to anyone deemed unfit or in violation of the facility\'s rules.',
            'f4' => 'Climbing involves inherent risks, including the risk of injury. By participating in climbing activities at ' . env('FACILITY_NAME') . ', you acknowledge and accept these risks.',
        ],

        'terms' => [
            'rule_1' => 'Climbing Rules',
            'rule_2' => 'Climbing Rules',
            'rule_3' => 'Climbing Rules',
            'rule_4' => 'Climbing Rules',
            'rule_5' => 'Safety Measures',
            'rule_6' => 'Safety Measures',
            'rule_7' => 'Safety Measures',
            'rule_8' => 'Safety Measures',
            'rule_9' => 'Prohibited Actions',
            'rule_10' => 'Personal Belongings',
        ],

        'conditions' => [
            'rule_1' => 'Do not tamper with or alter any climbing routes or holds.',
            'rule_2' => 'Drilling or placing any type of bolts in the climbing areas is not allowed.',
            'rule_3' => 'It is not allowed to pass the rope directly through the anchors for top-rope climbing.',
            'rule_4' => 'Respect the designated climbing areas as well as the flora and fauna.',
            'rule_5' => 'Always use appropriate full climbing equipment.',
            'rule_6' => 'Use safety harnesses and ropes at all times during climbing sessions.',
            'rule_7' => 'articipants must be physically fit and mentally prepared for climbing activities.',
            'rule_8' => 'Children under the age of 18 must be accompanied and supervised at all times by a responsible adult.',
            'rule_9' => 'Smoking and consumption of alcoholic beverages are strictly prohibited in the climbing areas.',
            'rule_10' => env('FACILITY_NAME') . ' is not responsible for any loss or damage to personal belongings.',
        ],

        'buttons' => [
            'show' => 'Terms and Conditions',
            'decline' => 'Decline',
        ],
    ],
];
