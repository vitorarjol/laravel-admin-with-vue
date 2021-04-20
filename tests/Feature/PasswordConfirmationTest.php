<?php


use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);


it('renders the confirm password screen', function () {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->get('/confirmacao-de-senha');

    $response->assertStatus(200);
});

it('ensures the password confirmation', function () {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->post('/confirmacao-de-senha', [
        'password' => 'password',
    ]);

    $response->assertRedirect();
    $response->assertSessionHasNoErrors();
});


it('prevents the password confirmation when using the wrong credentials', function () {
    $user = User::factory()->create();

    $response = $this->actingAs($user)->post('/confirmacao-de-senha', [
        'password' => 'wrong-password',
    ]);

    $response->assertSessionHasErrors();
});
