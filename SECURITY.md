# Security Policy

This repository is the ACTA links hub at
[`links.acta.build`](https://links.acta.build) — a small static Next.js page
listing ACTA's official destinations. No authentication, no user data, no
wallet connection.

Its security value is almost entirely about **link integrity**: people use it
to find the real ACTA properties, so anything that redirects them elsewhere is
a phishing vector.

## Supported Versions

| Version | Supported |
| ------- | --------- |
| 0.1.x (currently deployed) | :white_check_mark: |
| Anything older | :x: |

Only the version live at `links.acta.build` is supported. We patch forward and
redeploy.

## Scope

**In scope**

- Any link pointing somewhere other than the official ACTA property it claims
  — this is the most serious issue this repository can have
- Open redirects
- XSS or HTML injection
- Subdomain takeover of `links.acta.build`, or of anything it links to
- Leaking a secret through the client bundle or build output
- A dependency vulnerability reachable from the deployed bundle

**Out of scope**

- Missing security headers with no demonstrated impact
- Clickjacking on a page with no state-changing action
- Denial of service or load testing. **Do not run traffic floods.**
- Automated scanner output with no verified impact
- Vulnerabilities in the destinations themselves — use their own policies

## Reporting a Vulnerability

**Do not open a public issue for a security report.**

Use GitHub's private reporting:
[**Report a vulnerability**](https://github.com/ACTA-Team/links/security/advisories/new)

Or email **acta.xyz@gmail.com** with `SECURITY` in the subject.

For a wrong or hijacked link, say which one and where it actually goes. That
report gets handled immediately regardless of the timelines below.

### What happens next

| Stage | Timeline |
| ----- | -------- |
| We acknowledge your report | Within **5 business days** |
| We confirm or reject it, with reasoning | Within **15 business days** |
| Fix deployed for a link-integrity or high issue | Target **72 hours** from confirmation |
| Fix deployed for moderate or low | Target **90 days** from confirmation |

**If we accept it:** we fix, deploy, and credit you however you prefer.
**If we decline it:** we say why in writing.

### Disclosure

We ask for **90 days** or until the fix is deployed, whichever comes first.
If we go quiet, disclose — we will not object.
