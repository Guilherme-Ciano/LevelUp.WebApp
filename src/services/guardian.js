function verifyLoggedUser(access_token) {
  const verifier = access_token ? true : false;
  return verifier;
}

module.exports = {
  verifyLoggedUser,
};
