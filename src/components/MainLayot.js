import useSWR from "swr";
import SortList from "./SortList/SortList";
import BoardTasks from "./BoardTasks";
import LoadMore from "./LoadMore";
import MainFilter from "./MainFilter/MainFilter";
import MainControl from "./MainControl";
import SvgSprite from "./SvgSprite";
import { useState } from "react";
import { filterCallbacks } from "../utils";

function MainLayout() {
  


  const { data, error } = useSWR("/tasks");
  const [filterType, setFilterType] = useState('all')
  if (error) {
    return <div>Ошибка доступа или сети</div>;
  }
  if (!data) {
    return <div>загрузка...</div>;
  }
  
  const tasks = data.filter(filterCallbacks[filterType])

  return (
    <>
      <SvgSprite />
      <main class="main">
        <MainControl />

        <MainFilter setFilterType={setFilterType}/>

        <section class="board container">
          <SortList />

          <BoardTasks tasks={tasks} />

          <LoadMore />
        </section>
      </main>
    </>
  );
}

export default MainLayout;
