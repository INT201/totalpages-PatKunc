//const { template } = require('@babel/core')

function totalPages(arrayItems, rowsPerPage) {
  //code here
  if (arrayItems === undefined || arrayItems === null) {
    return undefined
  } else if (rowsPerPage === undefined || rowsPerPage === null || rowsPerPage == 0) {
    return 1
  } else {
    return Math.ceil(arrayItems.length / rowsPerPage)
  }
}
//12121312121
console.log(totalPages([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],2))

//module.exports = totalPages
