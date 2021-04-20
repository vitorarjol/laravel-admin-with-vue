<?php

use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

it('renders the registration screen', function () {
    $response = $this->get('/criar-conta');

    $response->assertStatus(200);
});

it('creates a new user from the registration form', function () {
    $response = $this->post('/criar-conta', [
        'name' => 'Test User',
        'email' => 'test@example.com',
        'password' => 'password',
        'password_confirmation' => 'password',
    ]);

    $this->assertAuthenticated();
    $response->assertRedirect(RouteServiceProvider::HOME);
});
