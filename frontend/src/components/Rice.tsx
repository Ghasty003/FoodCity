import data from "../data/rice-data";
import Card from "./Card";

function Rice() {
    return (
        <div className="flex flex-wrap justify-around mt-10 gap-8">
            {
                data.map(d => (
                    <Card key={d.id} title={d.title} price={d.price} description={d.description} img={d.img} />
                ))
            }
        </div>
    );
}

export default Rice;