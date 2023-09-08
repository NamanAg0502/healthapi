// middleware/errorMiddleware.mjs

export function handleErrors(err, req, res, next) {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
}
