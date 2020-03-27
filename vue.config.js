module.exports = {
    // publicPath: process.env.NODE_ENV === "production" ? "/resume-vue" : "/"
    publicPath: process.env.NODE_ENV !== "development" ? "./" : "/"
  };