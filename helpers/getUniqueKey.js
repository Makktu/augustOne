let candidateKey;
function getUniqueKey(theTargetArray) {
  candidateKey = Math.floor(Math.random() * 999);
  for (let item of theTargetArray) {
    if (candidateKey.toString() === item.id) {
      getUniqueKey(theTargetArray); // starts again if match found
    }
  }
  return candidateKey.toString();
}

export default getUniqueKey;
