import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  let token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5OTE0OWIyNy02NjllLTQzMzItOGM3MC1jZjMyOGI5Y2VmZmQiLCJqdGkiOiJiNDJlOWVhNmU4ZjEwMzY4NDY0YWYwNWQwYjA5MGY3YmViMTgyYTcxN2ViOWE2ZGRhNjQwMGMzMTRiYzkxZjY4YTIxMjA1ZjM0ZDM2NjNiOCIsImlhdCI6MTcxNDU2MDUzNS44NTg0NzQsIm5iZiI6MTcxNDU2MDUzNS44NTg0NzksImV4cCI6MTcxNDU3MTMzNS44Mzk4ODYsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.efA7CNf9MOE0t_STTvCfeH7sj4jujC_rGoTRv14mMeHcQR3rqBCnAlLabfA0gsBwGUcx8-XfO1QeegLzMlbawuBV8Cb3N75_h6eJbxp-Ow2crxo4SEu1tTToPNWV1hJr6ofT8itrsqnhIpKSnSKp-nd7n0xJ9Rzx7wsssNBzNu0JpPA9CApYMMAu0pLdFqNrFTj7XFjdNnsxfTDZfpzNxC5eoFJ9RQYF5xV8yRQwz2x7kGpaIW_HFvejwIV07kCC2SQZ6VKm3J5vPkCreEeqTvqu0eMZEWcCyp5_0rPiDgLvHctiX6cJqz7d2k-j6ufJta0vNANY23hBdrJKHw24hJL9u3inQnc4iNeZo2Jy2Nb0dVoYlIc6mWru6HeM4CN6pVRJqPoCXlQa5e_XfQa7W2QMcJJGQEiC-Mq4RlKmXDG_Lbd23qI_No6Gy4EMd_Wt0uGRoAi3prV11vjrYzijjXetJ5NYjm_t_HvhDJKm4HhpCA45Xv523MBxUmEO_t6vl3TBMTspIlHfLpUaEp9gRxTsq_cnfYQbClaCeDSS3Zet8XRzj7cDAyvP7DjK0xz-oKO9H9JiIr8jtXwmL6P833VQq8m5Y6rTLuQj5XyES3E_n0KS9doGiR44T8fcf02gFdEUQB5TwB0J30o_FQrNF2u8a7fm2gKy6yTFoKXQRHU';
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
