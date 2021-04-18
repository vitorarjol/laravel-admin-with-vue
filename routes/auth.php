<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\NewPasswordController;
use App\Http\Controllers\Auth\VerifyEmailController;
use App\Http\Controllers\Auth\RegisterUserController;
use App\Http\Controllers\Auth\PasswordResetLinkController;
use App\Http\Controllers\Auth\ConfirmablePasswordController;
use App\Http\Controllers\Auth\EmailVerificationPromptController;
use App\Http\Controllers\Auth\EmailVerificationNotificationController;

Route::get('login', [LoginController::class, 'index'])
    ->name('login.show')
    ->middleware('guest');

Route::post('/login', [LoginController::class, 'store'])
    ->name('login.confirm')
    ->middleware('guest');

Route::get('/criar-conta', [RegisterUserController::class, 'index'])
    ->middleware('guest')
    ->name('register');

Route::post('/criar-conta', [RegisterUserController::class, 'store'])
    ->middleware('guest');

Route::get('/esqueci-minha-senha', [PasswordResetLinkController::class, 'create'])
    ->middleware('guest')
    ->name('password.request');

Route::post('/esqueci-minha-senha', [PasswordResetLinkController::class, 'store'])
    ->middleware('guest')
    ->name('password.email');

Route::get('/cadastrar-nova-senha/{token}', [NewPasswordController::class, 'create'])
    ->middleware('guest')
    ->name('password.reset');

Route::post('/cadastrar-nova-senha', [NewPasswordController::class, 'store'])
    ->middleware('guest')
    ->name('password.update');

Route::get('/verifique-seu-email', [EmailVerificationPromptController::class, '__invoke'])
    ->middleware('auth')
    ->name('verification.notice');

Route::get('/verifique-seu-email/{id}/{hash}', [VerifyEmailController::class, '__invoke'])
    ->middleware(['auth', 'signed', 'throttle:6,1'])
    ->name('verification.verify');

Route::post('/verifique-seu-email/reenviar-notificacao', [EmailVerificationNotificationController::class, 'store'])
    ->middleware(['auth', 'throttle:6,1'])
    ->name('verification.send');

Route::get('/confirmacao-de-senha', [ConfirmablePasswordController::class, 'show'])
    ->middleware('auth')
    ->name('password.confirm');

Route::post('/confirmacao-de-senha', [ConfirmablePasswordController::class, 'store'])
    ->middleware('auth');

Route::post('/sair', [LoginController::class, 'destroy'])
    ->middleware('auth')
    ->name('logout');
