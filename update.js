module.exports = {
  run: [{
    method: "shell.run",
    params: {
      message: [
        "git fetch",
        "git reset --hard origin/main"
      ]
    }
  }, {
    method: "shell.run",
    params: {
      path: "app",
      message: [
        "git fetch",
        "git reset --hard origin/main"
      ]
    }
  }, {
    method: "script.start",
    params: {
      uri: "install.js",
      params: {
        venv: "env",
      }
    }
  },]
}
