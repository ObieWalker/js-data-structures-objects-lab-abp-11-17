// Write your solution in this file!
let driver = {}
function updateDriverWithKeyAndValue(obj, key, value){
  return Object.assign({}, obj, {[key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
  return Object.assign(obj, {[key]: value});
}
function deleteFromDriverByKey(driver, key){
  ;et newDriver = Object.assign({}, driver, key)
  delete newDriver[key]
  return newDriver
}
// destructivelyDeleteFromdriverByKey(driver, key){
//   let newDriver = driver
//   delete newDriver[key]
//   return newDriver
// }
