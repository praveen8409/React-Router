import { useParams } from "react-router-dom";

function ItemsDetails(){
    const params = useParams();
    console.log(params);
    return(
        <>
        <main>
            <h1>Items Details</h1>
        </main>
        <h2>{params.itemId}</h2>
        </>
    )
}

export default ItemsDetails;