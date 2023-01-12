import { useViewModel } from "./viewmodel";

const Home = () => {
    const {data} = useViewModel()
    console.log('data', data)


    // return <div>item.title</div>
    return <div>
            {data.map(item => <p>{item.title}</p>)}
        </div>
};

export default Home;