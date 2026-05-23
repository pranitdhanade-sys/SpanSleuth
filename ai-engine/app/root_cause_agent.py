"""LLM-driven root cause analysis service placeholder."""

def analyze_incident(context: dict) -> dict:
    return {
        'root_cause': 'Likely regression introduced in latest deployment',
        'confidence': 0.78,
        'evidence': ['500 spike after deployment', 'auth errors increased 6x'],
        'debugging_steps': ['Rollback build', 'Compare middleware config'],
    }
