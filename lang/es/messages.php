<?php

return [
    'alerts' => [
        'reservation' => [
            'success' => 'Reservación creada.',
            'error' => 'Lo sentimos, no hay lugares disponibles, intente otra fecha.',
        ],
    ],

    'titles' => [
        'welcome' => 'Bienvenido al Parque',
        'reservation' => 'Crea una Reservación',
        'daypass' => '¡Qué bueno verte de nuevo!',
        'checkIn' => 'Registra tu entrada',
        'language' => 'Selecciona un Lenguaje',
    ],

    'statements' => [
        'register' => 'Por favor, ingresa tu información para registrarte.',
        'checkIn' => 'Ingresa el correo electrónico que utilizaste para hacer tu reservación.',
    ],

    'footers' => [
        'index' => [
            'language' => '¿Quieres cambiar de idioma?',
            'toLanguage' => 'Haz clic aquí!',
        ],

        'register' => [
            'reservation' => '¿Ya tienes una cuenta?',
            'toReservation' => 'Reserva un lugar!',
        ],

        'reservation' => [
            'register' => '¿Todavía no tienes una cuenta?',
            'toRegister' => 'Registrarse!',
        ],

        'checkIn' => [
            'reservation' => '¿Todavía no tienes una reservación?',
            'toReservation' => 'Reserva tu lugar!',
        ],
    ],

    'buttons' => [
        'register' => 'Registrarse',
        'book' => 'Reservar',
        'check' => 'Check In',
        'join' => 'Unirse',
        'reservation' => 'Hacer Reservación',
        'language' => 'Guardar',
    ],

    'labels' => [
        'register' => [
            'firstName' => 'Nombre',
            'lastName' => 'Apellido',
            'email' => 'Correo Electrónico',
            'birthDate' => 'Fecha de Nacimiento',
            'contactName' => 'Nombre de Contacto de Emergencia',
            'contactNumber' => 'Teléfono de Contacto de Emergencia',
            'picture' => 'Sube tu Foto',
        ],

        'reservation' => [
            'email' => 'Ingresa el Correo de tu Cuenta',
            'date' => 'Selecciona una Fecha',
        ],
    ],

    'redirect' => [
        'register' => [
            'success' => 'Tu usuario ha sido creado.',
            'error' => 'Lo siento, algo salió mal. Inténtalo de nuevo.',
        ],
    ],

    'validation' => [
        'checkReservation' => [
            'email' => 'No hay ninguna reservación asociada a este correo electrónico',
        ],

        'storeReservationRequest' => [
            'email' => 'Este correo electrónico no está asociado con una cuenta registrada',
            'date' => 'Selecciona una fecha válida dentro de este mes',
        ],

        'storeUserRequest' => [
            'first_name' => 'Ingresa un nombre válido',
            'last_name' => 'Ingresa un apellido válido',
            'email' => 'Ingresa una dirección de correo electrónico válida',
            'date_of_birth' => 'Ingresa una fecha de nacimiento válida',
            'emergency_contact_name' => 'Ingresa un nombre válido',
            'emergency_contact_number' => 'Ingresa un número de teléfono válido',
            'photo' => 'Selecciona una fotografía tuya',
        ],
    ],
];
