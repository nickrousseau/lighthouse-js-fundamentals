const calculateTriangleArea = function calculateTriangleArea(base, height) {
  if (base < 0 || height < 0) {
    return undefined;
  } else {
    return ((base * height)/2);
  }
}
const calculateRectangleArea = function calculateRectangleArea(length, width) {
  if (length < 0 || width < 0) {
    return undefined;
  } else {
    return (length *  width);
  }
}

const calculateCircleArea = function calculateCircleArea(radius)  {
  if (radius < 0) {
    return undefined;
  } else {
    return (Math.PI * Math.pow(radius, 2));
  }
}

console.log(calculateTriangleArea(10,5));
console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5)); 
console.log(calculateCircleArea(3.5));