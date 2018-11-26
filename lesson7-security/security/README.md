# Security

## JWT(Json Web Token)
- auth
- exchange

JWT contains:
- header
- payload
- signature // HMACSHA256(base64(header)+'.'+base64(payload), secret)
