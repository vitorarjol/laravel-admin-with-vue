<?php


use App\Models\User;
use Illuminate\Support\Facades\Notification;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

it('renders the forgot my password screen', function () {
    $response = $this->get('/esqueci-minha-senha');

    $response->assertStatus(200);
});

it('sends the reset password email to the user', function () {
    Notification::fake();

    $user = User::factory()->create();

    $this->post('/esqueci-minha-senha', ['email' => $user->email]);

    Notification::assertSentTo($user, ResetPassword::class);
});

it('renders the password reset screen', function () {
    Notification::fake();

    $user = User::factory()->create();

    $this->post('/esqueci-minha-senha', ['email' => $user->email]);

    Notification::assertSentTo($user, ResetPassword::class, function ($notification) {
        $response = $this->get('/cadastrar-nova-senha/' . $notification->token);

        $response->assertStatus(200);

        return true;
    });
});

it('resets the password when providing the correct token', function () {
    Notification::fake();

    $user = User::factory()->create();

    $this->post('/esqueci-minha-senha', ['email' => $user->email]);

    Notification::assertSentTo($user, ResetPassword::class, function ($notification) use ($user) {
        $response = $this->post('/cadastrar-nova-senha', [
            'token' => $notification->token,
            'email' => $user->email,
            'password' => 'password',
            'password_confirmation' => 'password',
        ]);

        $response->assertSessionHasNoErrors();

        return true;
    });
});
