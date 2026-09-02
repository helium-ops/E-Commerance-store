import { useParams } from "react-router-dom";

export default function ProductDetails(){
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    return(
        <div>Product Details page {id}</div>
    )
}