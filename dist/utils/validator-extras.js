'use strict';

const _ = require('lodash');

const validator = _.cloneDeep(require('validator'));

const moment = require('moment');

const extensions = {
  extend(name, fn) {
    this[name] = fn;
    return this;
  },

  notEmpty(str) {
    return !str.match(/^[\s\t\r\n]*$/);
  },

  len(str, min, max) {
    return this.isLength(str, min, max);
  },

  isUrl(str) {
    return this.isURL(str);
  },

  isIPv6(str) {
    return this.isIP(str, 6);
  },

  isIPv4(str) {
    return this.isIP(str, 4);
  },

  notIn(str, values) {
    return !this.isIn(str, values);
  },

  regex(str, pattern, modifiers) {
    str += '';

    if (Object.prototype.toString.call(pattern).slice(8, -1) !== 'RegExp') {
      pattern = new RegExp(pattern, modifiers);
    }

    return str.match(pattern);
  },

  notRegex(str, pattern, modifiers) {
    return !this.regex(str, pattern, modifiers);
  },

  isDecimal(str) {
    return str !== '' && !!str.match(/^(?:-?(?:[0-9]+))?(?:\.[0-9]*)?(?:[eE][+-]?(?:[0-9]+))?$/);
  },

  min(str, val) {
    const number = parseFloat(str);
    return isNaN(number) || number >= val;
  },

  max(str, val) {
    const number = parseFloat(str);
    return isNaN(number) || number <= val;
  },

  not(str, pattern, modifiers) {
    return this.notRegex(str, pattern, modifiers);
  },

  contains(str, elem) {
    return !!elem && str.includes(elem);
  },

  notContains(str, elem) {
    return !this.contains(str, elem);
  },

  is(str, pattern, modifiers) {
    return this.regex(str, pattern, modifiers);
  }

};
exports.extensions = extensions; // instance based validators

validator.isImmutable = function (value, validatorArgs, field, modelInstance) {
  return modelInstance.isNewRecord || modelInstance.dataValues[field] === modelInstance._previousDataValues[field];
}; // extra validators


validator.notNull = function (val) {
  return val !== null && val !== undefined;
}; // https://github.com/chriso/validator.js/blob/6.2.0/validator.js


_.forEach(extensions, (extend, key) => {
  validator[key] = extend;
}); // map isNull to isEmpty
// https://github.com/chriso/validator.js/commit/e33d38a26ee2f9666b319adb67c7fc0d3dea7125


validator.isNull = validator.isEmpty; // isDate removed in 7.0.0
// https://github.com/chriso/validator.js/commit/095509fc707a4dc0e99f85131df1176ad6389fc9

validator.isDate = function (dateString) {
  // avoid http://momentjs.com/guides/#/warnings/js-date/
  // by doing a preliminary check on `dateString`
  const parsed = Date.parse(dateString);

  if (isNaN(parsed)) {
    // fail if we can't parse it
    return false;
  } // otherwise convert to ISO 8601 as moment prefers
  // http://momentjs.com/docs/#/parsing/string/


  const date = new Date(parsed);
  return moment(date.toISOString()).isValid();
};

exports.validator = validator;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi91dGlscy92YWxpZGF0b3ItZXh0cmFzLmpzIl0sIm5hbWVzIjpbIl8iLCJyZXF1aXJlIiwidmFsaWRhdG9yIiwiY2xvbmVEZWVwIiwibW9tZW50IiwiZXh0ZW5zaW9ucyIsImV4dGVuZCIsIm5hbWUiLCJmbiIsIm5vdEVtcHR5Iiwic3RyIiwibWF0Y2giLCJsZW4iLCJtaW4iLCJtYXgiLCJpc0xlbmd0aCIsImlzVXJsIiwiaXNVUkwiLCJpc0lQdjYiLCJpc0lQIiwiaXNJUHY0Iiwibm90SW4iLCJ2YWx1ZXMiLCJpc0luIiwicmVnZXgiLCJwYXR0ZXJuIiwibW9kaWZpZXJzIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwic2xpY2UiLCJSZWdFeHAiLCJub3RSZWdleCIsImlzRGVjaW1hbCIsInZhbCIsIm51bWJlciIsInBhcnNlRmxvYXQiLCJpc05hTiIsIm5vdCIsImNvbnRhaW5zIiwiZWxlbSIsImluY2x1ZGVzIiwibm90Q29udGFpbnMiLCJpcyIsImV4cG9ydHMiLCJpc0ltbXV0YWJsZSIsInZhbHVlIiwidmFsaWRhdG9yQXJncyIsImZpZWxkIiwibW9kZWxJbnN0YW5jZSIsImlzTmV3UmVjb3JkIiwiZGF0YVZhbHVlcyIsIl9wcmV2aW91c0RhdGFWYWx1ZXMiLCJub3ROdWxsIiwidW5kZWZpbmVkIiwiZm9yRWFjaCIsImtleSIsImlzTnVsbCIsImlzRW1wdHkiLCJpc0RhdGUiLCJkYXRlU3RyaW5nIiwicGFyc2VkIiwiRGF0ZSIsInBhcnNlIiwiZGF0ZSIsInRvSVNPU3RyaW5nIiwiaXNWYWxpZCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsTUFBTUEsQ0FBQyxHQUFHQyxPQUFPLENBQUMsUUFBRCxDQUFqQjs7QUFDQSxNQUFNQyxTQUFTLEdBQUdGLENBQUMsQ0FBQ0csU0FBRixDQUFZRixPQUFPLENBQUMsV0FBRCxDQUFuQixDQUFsQjs7QUFDQSxNQUFNRyxNQUFNLEdBQUdILE9BQU8sQ0FBQyxRQUFELENB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RSxDQUlBO0FBQ0E7OztBQUNBSixTQUFTLENBQUN3RCxNQUFWLEdBQW1CeEQsU0FBUyxDQUFDeUQsT0FBN0IsQyxDQUVBO0FBQ0E7O0FBQ0F6RCxTQUFTLENBQUMwRCxNQUFWLEdBQW1CLFVBQVNDLFVBQVQsRUFBcUI7QUFDdEM7QUFDQTtBQUNBLFFBQU1DLE1BQU0sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILFVBQVgsQ0FBZjs7QUFDQSxNQUFJdkIsS0FBSyxDQUFDd0IsTUFBRCxDQUFULEVBQW1CO0FBQ2pCO0FBQ0EsV0FBTyxLQUFQO0FBQ0QsR0FQcUMsQ0FRdEM7QUFDQTs7O0FBQ0EsUUFBTUcsSUFBSSxHQUFHLElBQUlGLElBQUosQ0FBU0QsTUFBVCxDQUFiO0FBQ0EsU0FBTzFELE1BQU0sQ0FBQzZELElBQUksQ0FBQ0MsV0FBTCxFQUFELENBQU4sQ0FBMkJDLE9BQTNCLEVBQVA7QUFDRCxDQVpEOztBQWNBdEIsT0FBTyxDQUFDM0MsU0FBUixHQUFvQkEsU0FBcEIiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBfID0gcmVxdWlyZSgnbG9kYXNoJyk7XHJcbmNvbnN0IHZhbGlkYXRvciA9IF8uY2xvbmVEZWVwKHJlcXVpcmUoJ3ZhbGlkYXRvcicpKTtcclxuY29uc3QgbW9tZW50ID0gcmVxdWlyZSgnbW9tZW50Jyk7XHJcblxyXG5jb25zdCBleHRlbnNpb25zID0ge1xyXG4gIGV4dGVuZChuYW1lLCBmbikge1xyXG4gICAgdGhpc1tuYW1lXSA9IGZuO1xyXG5cclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH0sXHJcbiAgbm90RW1wdHkoc3RyKSB7XHJcbiAgICByZXR1cm4gIXN0ci5tYXRjaCgvXltcXHNcXHRcXHJcXG5dKiQvKTtcclxuICB9LFxyXG4gIGxlbihzdHIsIG1pbiwgbWF4KSB7XHJcbiAgICByZXR1cm4gdGhpcy5pc0xlbmd0aChzdHIsIG1pbiwgbWF4KTtcclxuICB9LFxyXG4gIGlzVXJsKHN0cikge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNVUkwoc3RyKTtcclxuICB9LFxyXG4gIGlzSVB2NihzdHIpIHtcclxuICAgIHJldHVybiB0aGlzLmlzSVAoc3RyLCA2KTtcclxuICB9LFxyXG4gIGlzSVB2NChzdHIpIHtcclxuICAgIHJldHVybiB0aGlzLmlzSVAoc3RyLCA0KTtcclxuICB9LFxyXG4gIG5vdEluKHN0ciwgdmFsdWVzKSB7XHJcbiAgICByZXR1cm4gIXRoaXMuaXNJbihzdHIsIHZhbHVlcyk7XHJcbiAgfSxcclxuICByZWdleChzdHIsIHBhdHRlcm4sIG1vZGlmaWVycykge1xyXG4gICAgc3RyICs9ICcnO1xyXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChwYXR0ZXJuKS5zbGljZSg4LCAtMSkgIT09ICdSZWdFeHAnKSB7XHJcbiAgICAgIHBhdHRlcm4gPSBuZXcgUmVnRXhwKHBhdHRlcm4sIG1vZGlmaWVycyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyLm1hdGNoKHBhdHRlcm4pO1xyXG4gIH0sXHJcbiAgbm90UmVnZXgoc3RyLCBwYXR0ZXJuLCBtb2RpZmllcnMpIHtcclxuICAgIHJldHVybiAhdGhpcy5yZWdleChzdHIsIHBhdHRlcm4sIG1vZGlmaWVycyk7XHJcbiAgfSxcclxuICBpc0RlY2ltYWwoc3RyKSB7XHJcbiAgICByZXR1cm4gc3RyICE9PSAnJyAmJiAhIXN0ci5tYXRjaCgvXig/Oi0/KD86WzAtOV0rKSk/KD86XFwuWzAtOV0qKT8oPzpbZUVdWystXT8oPzpbMC05XSspKT8kLyk7XHJcbiAgfSxcclxuICBtaW4oc3RyLCB2YWwpIHtcclxuICAgIGNvbnN0IG51bWJlciA9IHBhcnNlRmxvYXQoc3RyKTtcclxuICAgIHJldHVybiBpc05hTihudW1iZXIpIHx8IG51bWJlciA+PSB2YWw7XHJcbiAgfSxcclxuICBtYXgoc3RyLCB2YWwpIHtcclxuICAgIGNvbnN0IG51bWJlciA9IHBhcnNlRmxvYXQoc3RyKTtcclxuICAgIHJldHVybiBpc05hTihudW1iZXIpIHx8IG51bWJlciA8PSB2YWw7XHJcbiAgfSxcclxuICBub3Qoc3RyLCBwYXR0ZXJuLCBtb2RpZmllcnMpIHtcclxuICAgIHJldHVybiB0aGlzLm5vdFJlZ2V4KHN0ciwgcGF0dGVybiwgbW9kaWZpZXJzKTtcclxuICB9LFxyXG4gIGNvbnRhaW5zKHN0ciwgZWxlbSkge1xyXG4gICAgcmV0dXJuICEhZWxlbSAmJiBzdHIuaW5jbHVkZXMoZWxlbSk7XHJcbiAgfSxcclxuICBub3RDb250YWlucyhzdHIsIGVsZW0pIHtcclxuICAgIHJldHVybiAhdGhpcy5jb250YWlucyhzdHIsIGVsZW0pO1xyXG4gIH0sXHJcbiAgaXMoc3RyLCBwYXR0ZXJuLCBtb2RpZmllcnMpIHtcclxuICAgIHJldHVybiB0aGlzLnJlZ2V4KHN0ciwgcGF0dGVybiwgbW9kaWZpZXJzKTtcclxuICB9XHJcbn07XHJcbmV4cG9ydHMuZXh0ZW5zaW9ucyA9IGV4dGVuc2lvbnM7XHJcblxyXG4vLyBpbnN0YW5jZSBiYXNlZCB2YWxpZGF0b3JzXHJcbnZhbGlkYXRvci5pc0ltbXV0YWJsZSA9IGZ1bmN0aW9uKHZhbHVlLCB2YWxpZGF0b3JBcmdzLCBmaWVsZCwgbW9kZWxJbnN0YW5jZSkge1xyXG4gIHJldHVybiBtb2RlbEluc3RhbmNlLmlzTmV3UmVjb3JkIHx8IG1vZGVsSW5zdGFuY2UuZGF0YVZhbHVlc1tmaWVsZF0gPT09IG1vZGVsSW5zdGFuY2UuX3ByZXZpb3VzRGF0YVZhbHVlc1tmaWVsZF07XHJcbn07XHJcblxyXG4vLyBleHRyYSB2YWxpZGF0b3JzXHJcbnZhbGlkYXRvci5ub3ROdWxsID0gZnVuY3Rpb24odmFsKSB7XHJcbiAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB2YWwgIT09IHVuZGVmaW5lZDtcclxufTtcclxuXHJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9jaHJpc28vdmFsaWRhdG9yLmpzL2Jsb2IvNi4yLjAvdmFsaWRhdG9yLmpzXHJcbl8uZm9yRWFjaChleHRlbnNpb25zLCAoZXh0ZW5kLCBrZXkpID0+IHtcclxuICB2YWxpZGF0b3Jba2V5XSA9IGV4dGVuZDtcclxufSk7XHJcblxyXG4vLyBtYXAgaXNOdWxsIHRvIGlzRW1wdHlcclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Nocmlzby92YWxpZGF0b3IuanMvY29tbWl0L2UzM2QzOGEyNmVlMmY5NjY2YjMxOWFkYjY3YzdmYzBkM2RlYTcxMjVcclxudmFsaWRhdG9yLmlzTnVsbCA9IHZhbGlkYXRvci5pc0VtcHR5O1xyXG5cclxuLy8gaXNEYXRlIHJlbW92ZWQgaW4gNy4wLjBcclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2Nocmlzby92YWxpZGF0b3IuanMvY29tbWl0LzA5NTUwOWZjNzA3YTRkYzBlOTlmODUxMzFkZjExNzZhZDYzODlmYzlcclxudmFsaWRhdG9yLmlzRGF0ZSA9IGZ1bmN0aW9uKGRhdGVTdHJpbmcpIHtcclxuICAvLyBhdm9pZCBodHRwOi8vbW9tZW50anMuY29tL2d1aWRlcy8jL3dhcm5pbmdzL2pzLWRhdGUvXHJcbiAgLy8gYnkgZG9pbmcgYSBwcmVsaW1pbmFyeSBjaGVjayBvbiBgZGF0ZVN0cmluZ2BcclxuICBjb25zdCBwYXJzZWQgPSBEYXRlLnBhcnNlKGRhdGVTdHJpbmcpO1xyXG4gIGlmIChpc05hTihwYXJzZWQpKSB7XHJcbiAgICAvLyBmYWlsIGlmIHdlIGNhbid0IHBhcnNlIGl0XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIC8vIG90aGVyd2lzZSBjb252ZXJ0IHRvIElTTyA4NjAxIGFzIG1vbWVudCBwcmVmZXJzXHJcbiAgLy8gaHR0cDovL21vbWVudGpzLmNvbS9kb2NzLyMvcGFyc2luZy9zdHJpbmcvXHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHBhcnNlZCk7XHJcbiAgcmV0dXJuIG1vbWVudChkYXRlLnRvSVNPU3RyaW5nKCkpLmlzVmFsaWQoKTtcclxufTtcclxuXHJcbmV4cG9ydHMudmFsaWRhdG9yID0gdmFsaWRhdG9yO1xyXG4iXX0=