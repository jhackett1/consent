# Consent

## API

The JSON API is at `/api/v1`

Endpoints include:

- `/auth`
- `/projects`

If there is an error, you'll get a response with a valid HTTP status code, shaped like:

```
{
    "status": 401,
    "message": "You're not logged in"
}
```

These error messages are generally user-friendly and safe to display in the UI.

## Roadmap

1. refactor fetch requests to use swr
2. add client-side search to form, participant and project views

- remaining database models
- participant-facing flow
- email and sms notifications for participants
- build proper dashboard
- add google oauth login
- add team admin screens
- users can join many teams
- refactor fetch requests to use swr

## Configuration

The server needs:

- `SESSION_SECRET`, a random string used to secure session cookies
