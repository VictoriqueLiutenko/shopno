function addClass(element, classStr) {
  let classesArray = element.className.split(" ");

  if(classesArray.indexOf(classStr) === -1) {
    classesArray.push(classStr);
  }

  let newClassesStr = classesArray.join(" ");
  element.className = newClassesStr;
}

function removeClass(element, classStr) {
  let classesArray = element.className.split(" ");

  let newClassesArray = classesArray.filter(function(current) {
    return current !== classStr;
  });

  let newClassesStr = newClassesArray.join(" ");
  element.className = newClassesStr;
}
