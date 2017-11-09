// Write your solution in this file!
let driver = {}
function updateDriverWithKeyAndValue(obj, key, value){
  return Object.assign({}, obj, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
  return Object.assign(obj, {[key]: value});
}
function deleteFromDriverByKey(driver, key){
  delete driver[key]
  return driver
}
// destructivelyDeleteFromdriverByKey(driver, key){
//   let newDriver = driver
//   delete newDriver[key]
//   return newDriver
// }
