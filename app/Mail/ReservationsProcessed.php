<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Database\Eloquent\Collection;
// use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class ReservationsProcessed extends Mailable
{
    use Queueable, SerializesModels;

    protected Collection $users;

    public function __construct($users)
    {
        $this->users = $users;
    }

    public function envelope(): Envelope
    {
        return new Envelope(
            from: env('MAIL_FROM_ADDRESS'),
            subject: __('mailer.dailyReservation.subject'),
        );
    }

    public function content(): Content
    {
        return new Content(
            html: 'emails.reservations.processed',
            with: [
                'users' => $this->users,
                'date' => date('d/m/Y'),
                'title' => __('mailer.dailyReservation.title'),
                'statement' => __('mailer.dailyReservation.statement'),
                'footer' => __('mailer.dailyReservation.footer')
            ],
        );
    }

    public function attachments(): array
    {
        return [];
    }
}
