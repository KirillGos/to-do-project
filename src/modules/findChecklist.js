export default function findChecklist(checklist, itemId) {
  let index = null;
  console.log(checklist, itemId)
  checklist.forEach((item, i) => {
    if (item.id === itemId) {
      index = i;
    }
  });
  return index;
}