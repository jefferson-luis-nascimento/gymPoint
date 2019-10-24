export default async (req, res, next) => {
  const { user } = req;

  if (!user.isAdmin) {
    return res.status(401).json('User is not allowed to execute this method');
  }

  return next();
};
