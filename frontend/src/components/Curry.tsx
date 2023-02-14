import data from "../data/curry-data";
import Card from "./Card";


function Curry() {
    return (
        <div className="flex flex-wrap justify-around mt-10 gap-8">
            {
                data.map(d => (
                    <Card key={d.id} id={d.id} title={d.title} description={d.description} price={d.price} img={d.img} />
                ))
            }
        </div>
    )
}


export default Curry;