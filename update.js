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
    method: "shell.run",
    params: {
      venv: "env",
      message: [
        "python3 -c \"import re, pathlib; text = pathlib.Path('app/requirements.txt').read_text(encoding='utf-8'); regex = r'^(--extra-index-url https://download\.pytorch.*|torch.*=.*|onnxruntime.*=.*)$\\n?'; result = re.sub(regex, '', text, flags=re.MULTILINE); pathlib.Path('app/requirements.txt').write_text(result, encoding='utf-8') if result else None\"",
        "pip install -r app/requirements.txt"
      ]
    }
  },]
}
