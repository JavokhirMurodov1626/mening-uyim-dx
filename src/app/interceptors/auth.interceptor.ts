import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  let token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5OTE0OWIyNy02NjllLTQzMzItOGM3MC1jZjMyOGI5Y2VmZmQiLCJqdGkiOiJkYWQwNzc4ODViZTVlMDhjYjk0NTY0YzIyNjhhMWZiMGY2NTBhYzAyMWI2NmUxMTY3ZTA2MDA5NzY0ZDczM2U2YWNlOWY1ZDBhMmM0NmM4OCIsImlhdCI6MTcxNDY1MTY0NS42NTgyMDYsIm5iZiI6MTcxNDY1MTY0NS42NTgyMTEsImV4cCI6MTcxNDY2MjQ0NS41NzEwMTgsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.Kwa4n19d8qfHqNGFjAU8HCmVFGL_IPkp6fAkEG8c4yesRlzBBc1kERzfZyKvaX78VMULC7EMZYpxcZo46J10kVDcE4nI8ipKdiCoNeHY7wkdH0nRuLCLAoByB7d1QwMU6Up9Gi9qyGjXv9tjgRfM15qUF667Fb_G2A30v9HTgEKgrY2RQox0dRj0px3YNHATWbhJHjIZJPOEy1pAvkqKEq5rDR-FPYfqR4KI8oOaKkVQkc6vd-auzRqIg9LXTSl5ZCTJQLiogy1HGDd4YLavtBzmMHCfRSyYUQFOGOAZ0NDqnI_X2tqBrRyxW8uhgocqcQqE2VOUZACQA2J23c78NSPj711p8h79mZmz0Kif006X_yNpunBL1C0EnJud9iZUStmQEJLeYjkFXLyOTepAC1G1OF587IM1Jmm5JwZYR20FO0nMIIxT3fNeJijQOmi2j5Lyi9qlpCg43Sp4tvqKt62sE9Zq0mytETXJJu3rWue2QZrpLzDmCxp9fvB7h5yS8GDZrki8_qqT3vLVfCQMWrpkkDVFr8B8HdeBSEO4qWjfPvO4uqrTK3Jg5PUm0KEMMENQhWPRetVf5l4QRh14nJoaX5QtdgHMG9LiHAeTxmC-BTQrGnQbPSlBNdWq3X4ormhhoGw8MG6WVSuoUftVi5pempgqEh09g-NPVzt53Mo';
  if (token) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });

    // second method
    // req = req.clone({
    //   headers: req.headers.set('Authorization', `Bearer ${token}`),
    // });
  }
  return next(req);
};
