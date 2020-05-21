function createClassList(classList) {
  return classList.filter(Boolean).join(' ');
}

export default createClassList;