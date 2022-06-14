const { verifyLoggedUser } = require("../services/guardian");

test("[FALSE] Expect to block if is empty", () => {
  expect(verifyLoggedUser()).toBe(false);
});

test("[TRUE] Expect to accept if has value", () => {
  expect(verifyLoggedUser("hash")).toBe(true);
});
