const roles = ["super_admin", "admin", "moderator", "owner", "worker", "user"];

export const checkRoleExists = (req, res, next) => {
  if (!req.body.role) {
    return res.status(400).json({ message: "role_does_not_exist" });
  }

  if(!roles.includes(req.body.role)) {
    return res.status(400).json({ message: "role_does_not_exist" });
  }
  next();
};
