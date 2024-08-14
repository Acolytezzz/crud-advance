import { useState } from "react";
import { useProductStore } from "../store/product";
import { toast, Bounce } from "react-toastify";

export const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    if (!success) {
      toast.error(message, {
        position: "top-right",
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: false,
        theme: "colored",
        transition: Bounce,
      });
    } else {
      toast.success(message, {
        position: "top-right",
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: false,
        theme: "colored",
        transition: Bounce,
      });
    }
    setNewProduct({ name: "", price: "", image: "" });
  };

  return (
    <div
      style={{ height: "calc(100svh - 55px" }}
      className="w-full flex flex-col text-center items-center"
    >
      <h1 className="text-5xl font-bold dark:text-white my-4">
        Create New Product
      </h1>
      <div className="w-5/6 sm:w-2/5 bg-[#f9f7e5] dark:bg-[#065465] my-4 py-12 mx-4 rounded-lg shadow-md">
        <div className="flex flex-col text-center items-center">
          <input
            placeholder="Product Name"
            name="name"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
            className="w-5/6 sm:w-2/3 my-4 p-4 bg-slate-800 dark:bg-white placeholder-white dark:placeholder-black rounded-lg text-white dark:text-black"
          />
          <input
            placeholder="Price"
            name="price"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
            className="w-5/6 sm:w-2/3 my-4 p-4 bg-slate-800 dark:bg-white placeholder-white dark:placeholder-black rounded-lg text-white dark:text-black"
          />
          <input
            placeholder="Image URL"
            name="image"
            value={newProduct.image}
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
            className="w-5/6 sm:w-2/3 my-4 p-4 bg-slate-800 dark:bg-white placeholder-white dark:placeholder-black rounded-lg text-white dark:text-black"
          />
          <button
            className="w-36 rounded-md p-2 m-1 transition-colors duration-200 bg-blue-500 text-white hover:bg-cyan-500 active:bg-slate-700 focus:outline-none"
            onClick={handleAddProduct}
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};
