// Serve files from `static` in development
const express = require(`express`);

exports.onCreateDevServer = ({ app }) => {
    app.use(express.static("public"))
  }