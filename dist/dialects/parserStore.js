'use strict';

const stores = new Map();

module.exports = dialect => {
  if (!stores.has(dialect)) {
    stores.set(dialect, new Map());
  }

  return {
    clear() {
      stores.get(dialect).clear();
    },

    refresh(dataType) {
      for (const type of dataType.types[dialect]) {
        stores.get(dialect).set(type, dataType.parse);
      }
    },

    get(type) {
      return stores.get(dialect).get(type);
    }

  };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2xpYi9kaWFsZWN0cy9wYXJzZXJTdG9yZS5qcyJdLCJuYW1lcyI6WyJzdG9yZXMiLCJNYXAiLCJtb2R1bGUiLCJleHBvcnRzIiwiZGlhbGVjdCIsImhhcyIsInNldCIsImNsZWFyIiwiZ2V0IiwicmVmcmVzaCIsImRhdGFUeXBlIiwidHlwZSIsInR5cGVzIiwicGFyc2UiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLE1BQU1BLE1BQU0sR0FBRyxJQUFJQyxHQUFKLEVBQWY7O0FBRUFDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkMsT0FBTyxJQUFJO0FBQzFCLE1BQUksQ0FBQ0osTUFBTSxDQUFDSyxHQUFQLENBQVdELE9BQVgsQ0FBTCxFQUEwQjtBQUN4QkosSUFBQUEsTUFBTSxDQUFDTSxHQUFQLENBQVdGLE9BQVgsRUFBb0IsSUFBSUgsR0FBSixFQUFwQjtBQUNEOztBQUVELFNBQU87QUFDTE0sSUFBQUEsS0FBSyxHQUFHO0FBQ05QLE1BQUFBLE1BQU0sQ0FBQ1EsR0FBUCxDQUFXSixPQUFYLEVBQW9CRyxLQUFwQjtBQUNELEtBSEk7O0FBSUxFLElBQUFBLE9BQU8sQ0FBQ0MsUUFBRCxFQUFXO0FBQ2hCLFdBQUssTUFBTUMsSUFBWCxJQUFtQkQsUUFBUSxDQUFDRSxLQUFULENBQWVSLE9BQWYsQ0FBbkIsRUFBNEM7QUFDMUNKLFFBQUFBLE1BQU0sQ0FBQ1EsR0FBUCxDQUFXSixPQUFYLEVBQW9CRSxHQUFwQixDQUF3QkssSUFBeEIsRUFBOEJELFFBQVEsQ0FBQ0csS0FBdkM7QUFDRDtBQUNGLEtBUkk7O0FBU0xMLElBQUFBLEdBQUcsQ0FBQ0csSUFBRCxFQUFPO0FBQ1IsYUFBT1gsTUFBTSxDQUFDUSxHQUFQLENBQVdKLE9BQVgsRUFBb0JJLEdBQXBCLENBQXdCRyxJQUF4QixDQUFQO0FBQ0Q7O0FBWEksR0FBUDtBQWFELENBbEJEIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBzdG9yZXMgPSBuZXcgTWFwKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZGlhbGVjdCA9PiB7XG4gIGlmICghc3RvcmVzLmhhcyhkaWFsZWN0KSkge1xuICAgIHN0b3Jlcy5zZXQoZGlhbGVjdCwgbmV3IE1hcCgpKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgY2xlYXIoKSB7XG4gICAgICBzdG9yZXMuZ2V0KGRpYWxlY3QpLmNsZWFyKCk7XG4gICAgfSxcbiAgICByZWZyZXNoKGRhdGFUeXBlKSB7XG4gICAgICBmb3IgKGNvbnN0IHR5cGUgb2YgZGF0YVR5cGUudHlwZXNbZGlhbGVjdF0pIHtcbiAgICAgICAgc3RvcmVzLmdldChkaWFsZWN0KS5zZXQodHlwZSwgZGF0YVR5cGUucGFyc2UpO1xuICAgICAgfVxuICAgIH0sXG4gICAgZ2V0KHR5cGUpIHtcbiAgICAgIHJldHVybiBzdG9yZXMuZ2V0KGRpYWxlY3QpLmdldCh0eXBlKTtcbiAgICB9XG4gIH07XG59O1xuIl19