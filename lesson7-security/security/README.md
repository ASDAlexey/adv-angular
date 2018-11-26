# Security

## JWT(Json Web Token)
- auth
- exchange

JWT contains:
- header
- payload
- signature // HMACSHA256(base64(header)+'.'+base64(payload), secret)

# XSS

#### Sanitization
 - HTML
 - Style
 - URL
 - Resourse URL
 
 sanitizer.bypassSecurityTrustUrl(url);
 
# XSRF
- Angular 
```
HttpsClientXsrfModule.withOptions({
  cookieName: 'xsrf-cookie'
  headerName: 'xsrf-header'
})
```

# ACL 
- https://github.com/AlexKhymenko/ngx-permissions // неплохо но не идеально
```
Role
Resourse
Permissions (read/view/update/delete)
```
