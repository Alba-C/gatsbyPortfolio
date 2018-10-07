
import projectData from './projectData';


  const keySet = (arr) => {
    var newArr = [];
    arr.map((proj) => {
      return newArr = newArr.concat(proj.keywords)
    });
    return [... new Set(newArr)];
  }

export default keySet(projectData);