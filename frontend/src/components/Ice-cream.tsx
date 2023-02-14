import data from "../data/icecream-data";
import Card from "./Card";

function IceCream() {
    return (
        <div className="flex flex-wrap justify-around mt-10 gap-8">
            {
                data.map(d => (
                    <Card key={d.id} id={d.id} title={d.title} price={d.price} description={d.description} img={d.img} />
                ))
            }
        </div>
    );
}

export default IceCream;