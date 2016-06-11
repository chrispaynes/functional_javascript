// constructor function
function Point2D(x, y) {
  this._x = x;
  this._y = y;
}

// creates a new instance of Point2D
// uses the Function.call method to metaprogram a derivative of Point2D's constructor behavior
function Point3D(x, y, z, a){
  Point2D.call(this, x, y);
  this._z = z;
  this._a = a;
}

// FUNCTION CALLS:
// console.log( new Point2D(0, 1) );
// Point2D { _x: 0, _y: 1 }

// console.log( new Point3D(10, -1, 100, 56) );
// Point3D { _x: 10, _y: -1, _z: 100, _a: 56 }