# Setup

## 1. Initialize the project with uv

```bash
uv init --bare          # create a minimal pyproject.toml (no src/ scaffolding)
uv python pin 3.13      # pin the project to Python 3.13
uv add python-dotenv requests claude-agent-sdk   # add dependencies
```

## 2. Add your API key

Put your Anthropic API key in `.env`:

```dotenv
ANTHROPIC_API_KEY=sk-ant-...
```

## 3. Run

```bash
uv run main.py
```
