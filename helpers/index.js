const checkProd = () => {
  return process.env.NODE_ENV === "production";
};

module.exports = { checkProd };
