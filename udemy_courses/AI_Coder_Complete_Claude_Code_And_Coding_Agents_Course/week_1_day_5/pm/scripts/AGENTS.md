# Scripts

Start and stop the Docker container for the app.

| Script | Platform | Action |
|---|---|---|
| `start.sh` | Mac / Linux | `docker compose up -d --build` |
| `stop.sh` | Mac / Linux | `docker compose down` |
| `start.ps1` | Windows (PowerShell) | `docker compose up -d --build` |
| `stop.ps1` | Windows (PowerShell) | `docker compose down` |

All scripts `cd` to the project root before running, so they work from any directory.
