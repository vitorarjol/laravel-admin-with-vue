<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    @routes
    {{ vite_assets() }}
</head>

<body class="antialiased border-top-wide border-primary d-flex flex-column">
    @inertia
</body>

</html>