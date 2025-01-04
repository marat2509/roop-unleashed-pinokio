module.exports = {
  run: [
    // Edit this step to customize the git repository to use
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/C0untFloyd/roop-unleashed app"
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",
        path: "app",
        message: [
          "python3 -c \"import re, pathlib; text = pathlib.Path('requirements.txt').read_text(encoding='utf-8'); regex = r'^(--extra-index-url https://download\.pytorch.*|torch.*=.*|onnxruntime.*=.*)$\n?'; result = re.sub(regex, '', text, flags=re.MULTILINE); pathlib.Path('requirements.txt').write_text(result, encoding='utf-8') if result else None\"",
          "pip install -r requirements.txt"
        ]
      }
    },
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
        venv: "env",
        path: "app",
        }
      }
    },
    {
      method: "fs.link",
      params: {
        venv: "app/env"
      }
    }
  ]
}
