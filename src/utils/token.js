const jwt = require('jsonwebtoken');
const key = 'hahahadeohieukieugi'
const getToken = (data) => {
  return jwt.sign(data, key);
};
const parseToken = async (token) => {
  try {
    const data = await jwt.verify(token, key);
    return data;
  } catch (error) {
    return {error: error}
  }
};
module.exports = { getToken, parseToken };