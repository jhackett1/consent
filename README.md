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

- remaining database models
- participant-facing flow
- email and sms notifications for participants
- add client-side search to form, participant and project views
- build proper dashboard
- add google oauth login
- add team admin screens
- users can join many teams