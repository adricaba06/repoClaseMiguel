import { HttpInterceptorFn } from '@angular/common/http';

const api_token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNmJmODVlM2U2NzMzNmNiYTgzMzFiODRkNGU4YWVhOCIsIm5iZiI6MTc2MzM2NzgzNi41NjMsInN1YiI6IjY5MWFkYjljNzExMTIyMGE2YjVkZmU3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.pV-bN-Ko4SWCx_hVhi0bj6fz6UzjHe7iYF1Ke36W6DY'

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const reqWithHeader = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${api_token}`),
  })
  return next(reqWithHeader);
};
