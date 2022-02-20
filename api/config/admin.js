module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '69960873a7eca18e4ac0622f00796f48'),
  },
});
