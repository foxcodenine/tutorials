/clear
/config
/context
/resume
/status
/state
/compact
/init
/model
/rewind
/skill
/mcp
/plugin
/plan
/permissions

---------------------------------------------------------------

cloude --dangerously-skip-permissioms

-------------------------------------------------------------
# mcp

https://glama.ai
https://mcp.so
https://smithery.ai
https://github.com/modelcontextprotocol

To add the context7 MCP Server:
claude mcp add context7 -- npx -y @upstash/context7-mcp


Adding the Github Remote MCP Server, substituting in your Access Token where it says YOUR_GITHUB_PAT:

claude mcp add --transport http github https://api.githubcopilot.com/mcp --header "Authorization: Bearer YOUR_GITHUB_PAT"

Adding the Atlassian Jira Remote MCP Server:
claude mcp add --transport http atlassian https://mcp.atlassian.com/v1/mcp





---------------------------------------------------------------

# plugins

context7

skill-creator

code-review

frontend-design

feature-dev

code-simplifier

ralph-lop

security-guidance

---------------------------------------------------------------

# skills

https://www.skills.sh/

systematic-debugging
https://www.skills.sh/obra/superpowers/systematic-debugging
npx skills add https://github.com/obra/superpowers --skill systematic-debugging


---------------------------------------------------------------
start here

1. create a slash command

done by
.claude -> commands -> command_file.md (eg:doc-review.md with instructions inside)

2. multi-agents and sub agents

eg:
.claude -> agents -> change-reviewer.md
Prompt: User your change-reviewer subagent to review changes since last commit

3. agent teams

4. hook
.claude -> settings.json

eg:
    "hooks": {
        "Stop": [
            {
                "hooks": [
                    {
                        "type": "agent",
                        "prompt": "Carry out a review of all changes since last commit and write results to the end of a file named planning/REVIEW.md",
                        "timeout": 240
                    }
                ]
            }
        ]
    }

4. create a plugin

independent-reviewer
    ├── .claude-plugin
    │   └── plugin.json
    └── hooks
        └── hooks.json

.claude-plugin   
    └── marketplace.json     

/plugins -> Marketplaces