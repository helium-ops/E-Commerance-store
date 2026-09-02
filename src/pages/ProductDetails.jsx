import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductById } from "../data/products.js";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const foundProduct = getProductById(id);

    if (!foundProduct) {
      navigate("/");
      return;
    }
     else{
    setProduct(foundProduct);
     }
  }, [id, navigate]);

  if (!product) {
    return <div className="flex min-h-[80vh] items-center justify-center text-lg font-medium text-slate-600">Loading...</div>;
  }

  return (
    <div className="absolute inset-x-0 bottom-0 top-[64px] flex items-center justify-center bg-gradient-to-br from-slate-100 via-white to-slate-200 p-6">
      <div className="w-full max-w-6xl rounded-[2rem] border border-slate-200 bg-white/90 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur-sm md:p-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-stretch md:gap-12">
          <div className="flex w-full items-center justify-center overflow-hidden rounded-[1.5rem] bg-slate-100 p-4 md:w-[46%]">
            <img
              src={product.image}
              alt={product.name}
              className="h-[420px] w-full rounded-[1.25rem] object-contain shadow-sm md:h-[540px]"
            />
          </div>

          <div className="flex w-full flex-col justify-center md:w-[54%]">
            <h1 className="text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
              {product.name}
            </h1>

            <div className="mt-5 flex items-end gap-3">
              <span className="text-3xl font-bold text-slate-900 md:text-4xl">
                ${product.price.toFixed(2)}
              </span>
            </div>

            <p className="mt-6 text-base leading-8 text-slate-600 md:text-lg">
              {product.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-base font-semibold text-white transition duration-200 hover:bg-slate-700">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}