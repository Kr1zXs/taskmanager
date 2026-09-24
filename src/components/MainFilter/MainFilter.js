import MainFilterItem from "./MainFilterItem";
import { filterCallbacks, filters } from "../../utils";
function MainFilter( {data, filterTipe, setFilterType} ) {
  
  return (
    <section class="main__filter filter container">
      {filters.map((filter) => {
        const count = data.filter(filterCallbacks[filter.filterType],).length

        const disabled = count <= 0
        const checked = filterTipe === filter.filterType
        return (
        <MainFilterItem
        key={filter.id}
        {...filter}
         count={count}
         checked={checked}
         disabled={disabled}
         onChange={setFilterType}
        />
        )
      })}
      
      
    </section>
  );
}
export default MainFilter;
