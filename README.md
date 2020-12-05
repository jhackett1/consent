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