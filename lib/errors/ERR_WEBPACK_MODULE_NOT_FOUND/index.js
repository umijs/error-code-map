const isWebpackError = require('../../utils/isWebpackError');

module.exports = {
  test({ context }) {
    return isWebpackError(context, 'ModuleNotFoundError');
  },
};
