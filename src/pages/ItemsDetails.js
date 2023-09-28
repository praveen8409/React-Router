import { useParams } from "react-router-dom";
import { ITEMS } from "../data/itemData";
function ItemsDetails(){
    const { id } = useParams();
    const item = ITEMS.find((item) => item.id === id);
    return(
        <>
        <main>
            <h1>Items Details</h1>
        </main>
        <h2>{item.title}</h2>
      <h3>{item.detail} </h3>
        </>
    )
}

export default ItemsDetails;