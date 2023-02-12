import lists from "../data/chicken-data";
import Card from "./Card";

function Chicken() {
    return (
        <div className="flex flex-wrap justify-around mt-10 gap-8">
            {
                lists.map(list => (
                    <Card key={list.id} title={list.title} price={list.price} description={list.description} img={list.img} />
                ))
            }
        </div>
    );
}

export default Chicken;