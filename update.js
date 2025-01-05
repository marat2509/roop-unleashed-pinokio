module.exports = {
  run: [{
    method: "shell.run",
    path: "app",
    params: {
      message: [
        "git fetch",
        "git reset --hard origin/main"
      ]
    }
  }, {
    method: "script.start",
    params: {
      uri: "torch.js",
      params: {
        venv: "env",
      }
    }
  },]
}
