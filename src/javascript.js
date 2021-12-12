const getArea = ({ width, height = width }) => {
  return width * height
}
console.log(getArea({ width: 10 }))