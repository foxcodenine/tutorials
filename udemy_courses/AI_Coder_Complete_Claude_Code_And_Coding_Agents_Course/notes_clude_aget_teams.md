# Claude Agent Teams

[https://code.claude.com/docs/en/agent-teams](https://code.claude.com/docs/en/agent-teams)

## Compare with subagents

Both agent teams and **subagents** let you parallelize work, but they operate differently. Choose based on whether your workers need to communicate with each other:

||Subagents|Agent teams|
|---|---|---|
|**Context**|Own context window; results return to the caller|Own context window; fully independent|
|**Communication**|Report results back to the main agent only|Teammates message each other directly|
|**Coordination**|Main agent manages all work|Shared task list with self-coordination|
|**Best for**|Focused tasks where only the result matters|Complex work requiring discussion and collaboration|
|**Token cost**|Lower: results summarized back to main context|Higher: each teammate is a separate Claude instance|

Use subagents when you need quick, focused workers that report back. Use agent teams when teammates need to share findings, challenge each other, and coordinate on their own.

# Instructions

1. Add to `settings.json`

```json
{
  "env": {
    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1"
  },
  "teammateMode": "in-process"
}
```

2. Prompt Claude: “Create an agent team to...”
3. Shift+Tab to delegate mode; also:  
    “Wait for your teammates to complete their tasks before proceeding”
4. Shift up+down to select team-mate
5. Commands to stop when complete:  
    “Ask the researcher teammate to shut down”  
    “Clean up the team”

Bottom note:  
Invest in `CLAUDE.md`; expect cost; be willing to start over.


# Prompt

Prompt eg:

```
Create an Agent Team to complete the project as defined. Team-members: a Front-end engineer to work on the frontend, a Backend API Engineer on the backend, a Database Engineer on all DB related code, an LLM Engineer on the LLM calls. While all team-members should work on unit tests, there should be an Integration Tester team-member that builds and runs end-to-end Playwright tests when ready, reporting issues back to be fixed by the team-members. Finally, a Devops engineer for the Docker container and the scripts.
```