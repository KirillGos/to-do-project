export default function findChecklist(checklist, itemId) {
  let index = null;
  checklist.forEach((item, i) => {
    if (item.id === itemId) {
      index = i;
    }
  });
  return index;
}