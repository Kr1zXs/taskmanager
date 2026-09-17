import SortListitem from "./SortListItem";

function SortList() {
  const sorts = [
        {
            id: crypto.randomUUID(),
            name: 'SORT BY DEFAULT',
        },
        {
            id: crypto.randomUUID(),
            name: ' SORT BY DATE up',
        },
        {
            id: crypto.randomUUID(),
            name: ' SORT BY DATE down',
        }
    ]
  return (
    <div class="board__sort-list">
      <a href="#" class="board__sort-item">
        {sorts.map((sort) => (
        <SortListitem {...sort}/>
      ))}
      </a>
      
    </div>
  );
}
export default SortList;
