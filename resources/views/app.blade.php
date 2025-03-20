<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
  <link rel="icon" type="image/svg+xml" href="{{ asset('favicon.svg') }}">
  @viteReactRefresh
  @inertiaHead
  @vite('resources/js/app.jsx')
  @vite('resources/css/app.css')
</head>

<body>
  @inertia
</body>

</html>