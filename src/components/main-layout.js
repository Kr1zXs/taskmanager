import useSWR from 'swr'
function MainLayout() {
    const {data, error} = useSWR('/tasks');

    if (error){
        return <div>Ошибка доступа или сети</div>;

    }
    if (!data){
        return <div>загрузка...</div>;

    }
    return <div>{JSON.stringify(data)}</div>
}

export default MainLayout