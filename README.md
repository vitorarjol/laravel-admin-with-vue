## What's the motivation behind this project?

The vast majority of projects that I was involved in the last few years had some kind of administration panel for the end user. If you have worked in a project like that, you probably encountered datatables, csv imports, roles/permissions and searches.

New tools emerges in the ecosystem, but maybe that project that you're working on the moment isn't the best fit for this hot tech.

So I'm using this project to learn some new things that I'm interested at the moment (like php 8, typescript, vue 3), and also taking this opportunity to gather together a set of features that I'm sure I'll reach for sometime in the  feature.

I'll do my best to keep the code simple and maintainable.

## Here's what the tech stack looks like

The goal here is to get the most benefits that we can from the first party packages of Laravel, while building some part of the code "from scratch". For example, I'm not going to use Jetstream and get everything done for me, I'll probably use fortify and implement some pieces by myself.

I'm planning to go with:

| Item | Read more about it |
| ------ | ------ |
| Laravel |  [laravel.com](https://laravel.com/) |
| Vue.js | [vuejs.org](https://v3.vuejs.org/) |
| Inertia | [inertiajs.com](https://inertiajs.com/) |
| Tabler (Bootstrap theme) | [tabler.github.io](https://tabler.github.io/) |
| Typescript | [typescriptlang.org](https://www.typescriptlang.org/) |
| Homestead |  [laravel.com/docs/homestead](https://laravel.com/docs/homestead) |

## What's on the wishlist?

I want to implement a lot of features, but right now I don't have a priority or a timeline for it. Some of the packages / features that I'm looking forward to see in action are:

- [Pest](https://pestphp.com/) - An elegant PHP Testing Framework
- [Cypress](https://www.cypress.io/) - Fast, easy and reliable testing for anything that runs in a browser.
- [Fortify](https://laravel.com/docs/fortify) - A frontend agnostic authentication backend implementation for Laravel
- [Sanctrum](https://laravel.com/docs/sanctrum) - To issue tokens to users without thinking about oAuth
- [Laravel Excel](https://laravel-excel.com/) - Supercharged Excel exports and imports in Laravel
- [Echo](https://laravel.com/docs/broadcasting#client-ably) - Subscribe to channels and listen for events broadcast by your server-side broadcasting driver
- [Scout + Melisearch](https://laravel.com/docs/scout) - Full-text search to your Eloquent models.
- [Envoy](https://laravel.com/docs/envoy) -  Setup tasks for deployment


## Getting started

Clone the repo on your machine:

```sh
git clone https://github.com/vitorarjol/laravel-admin-with-vue.git my-admin
cd my-admin
```

Install PHP dependencies:

```sh
composer install
```

Install NPM dependencies and build the assets:

```sh
npm i && npm run prod
```

Setup configuration:

```sh
cp .env.example .env
```

Generate the application key:

```sh
php artisan key:generate
```

Run the dev server:

```sh
php artisan serve
```

## Contributing

Thank you for considering contributing to this project! The contribution guide it's still a piece to be done.

## License

This project is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
