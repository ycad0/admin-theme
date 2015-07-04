require.config({
  paths: {
    "admin-lte": "../vendor/admin-lte/dist/js/app",
    bootstrap: "../vendor/bootstrap/dist/js/bootstrap",
    jquery: "../vendor/jquery/dist/jquery",
    fontawesome: "../vendor/fontawesome/fonts/*",
    ionicons: "../vendor/ionicons/fonts/*"
  },
  shim: {
    "vendor/admin-lte/app": [
      "jquery",
      "bootstrap"
    ],
    "vendor/jvectormap/jquery-jvectormap-1.2.2.min": [
      "jquery"
    ],
    "vendor/jvectormap/jquery-jvectormap-world-mill-en": [
      "jquery",
      "lib/jvectormap/jquery-jvectormap-1.2.2.min"
    ],
    "vendor/slimScroll/jquery.slimscroll": [
      "jquery"
    ],
    "vendor/admin-lte/pages/dashboard2": [
      "jquery",
      "bootstrap"
    ],
    "vendor/admin-lte/demo": [
      "jquery",
      "bootstrap"
    ]
  },
  packages: [

  ]
});