'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

const BaseError = require('./base-error');
/**
 * Thrown when an include statement is improperly constructed (see message for details)
 */


let EagerLoadingError =
/*#__PURE__*/
function (_BaseError) {
  _inherits(EagerLoadingError, _BaseError);

  function EagerLoadingError(message) {
    var _this;

    _classCallCheck(this, EagerLoadingError);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EagerLoadingError).call(this, message));
    _this.name = 'SequelizeEagerLoadingError';
    Error.captureStackTrace(_assertThisInitialized(_this), _this.constructor);
    return _this;
  }

  return EagerLoadingError;
}(BaseError);

module.exports = EagerLoadingError;