# Security Policy

## Supported Versions
PulseGuard AI follows a rolling-release model on `main`.

## Reporting a Vulnerability
Please report vulnerabilities privately to **security@pulseguard.local**.
Include:
- Affected component
- Reproduction steps
- Impact assessment
- Suggested remediation

We target acknowledgement within 48 hours and remediation guidance within 7 days.

## Security Controls
- JWT authentication with role-based access control.
- Password hashing via Argon2.
- API rate limiting and request validation.
- Structured audit logs for security-sensitive actions.
- Secure headers and CORS restrictions by environment.
