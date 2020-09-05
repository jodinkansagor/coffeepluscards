export const getSignupUser = (user) => {
  return Promise.resolve({
    email: user.email,
    username: user.username,
  });
};

export const getLoginUser = (user) => {
  return Promise.resolve({
    email: user.email,
  });
};
