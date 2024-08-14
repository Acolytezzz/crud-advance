import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { useProductStore } from "../store/product";
import { toast, Bounce } from "react-toastify";
import { Modal } from "./Modal";
import { useState } from "react";

export const ProductCard = ({ product }) => {
  const { deleteProduct, udpateProduct } = useProductStore();

  const [updatedProduct, setUpdatedProduct] = useState(product);

  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
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
      toast.error(message, {
        position: "top-right",
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: false,
        theme: "colored",
        transition: Bounce,
      });
    }
  };

  const handleUpdateProduct = async (pid, updatedProduct) => {
    const{success, message} = await udpateProduct(pid, updatedProduct);
    closeModal();
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
  };

  return (
    <>
      <div className="rounded-lg shadow-lg overflow-hidden transition duration-300 hover:-translate-y-5 hover:shadow-xl bg-slate-800 dark:bg-white">
        <img
          src={product.image}
          alt={product.name}
          className="h-56 w-full object-cover"
        />
        <div className="p-4 flex flex-col items-start">
          <p className="font-bold text-2xl text-slate-300 dark:text-black mb-2">
            {product.name}
          </p>
          <p className="font-bold text-lg text-slate-300 dark:text-black mb-2">
            ${product.price}
          </p>
          <div>
            <button
              className="bg-blue-400 rounded-md p-2 m-1 transition-colors duration-200 hover:bg-slate-200 dark:hover:bg-slate-900 active:bg-slate-700 focus:outline-none"
              onClick={openModal}
            >
              <FaRegEdit size={20} className="dark:text-white" />
            </button>
            <button
              className="bg-red-400 rounded-md p-2 m-1 transition-colors duration-200 hover:bg-slate-200 dark:hover:bg-slate-900 active:bg-slate-700 focus:outline-none"
              onClick={() => handleDeleteProduct(product._id)}
            >
              <MdOutlineDelete size={20} className="dark:text-white" />
            </button>
          </div>
        </div>
      </div>

      <Modal open={open} onClose={closeModal}>
        <div className="w-auto sm:w-[450px] p-4 m-2">
          <p className="text-3xl text-black dark:text-white font-bold">
            Update Product
          </p>
          <div className="flex flex-col text-center items-center">
            <input
              placeholder="Product Name"
              name="name"
              value={updatedProduct.name}
              onChange={(e) =>
                setUpdatedProduct({ ...updatedProduct, name: e.target.value })
              }
              className="w-full my-4 p-4 bg-slate-800 dark:bg-white placeholder-white dark:placeholder-black rounded-lg text-white dark:text-black"
            />
            <input
              placeholder="Price"
              name="price"
              value={updatedProduct.price}
              onChange={(e) =>
                setUpdatedProduct({ ...updatedProduct, price: e.target.value })
              }
              className="w-full my-4 p-4 bg-slate-800 dark:bg-white placeholder-white dark:placeholder-black rounded-lg text-white dark:text-black"
            />
            <input
              placeholder="Image URL"
              name="image"
              value={updatedProduct.image}
              onChange={(e) =>
                setUpdatedProduct({ ...updatedProduct, image: e.target.value })
              }
              className="w-full my-4 p-4 bg-slate-800 dark:bg-white placeholder-white dark:placeholder-black rounded-lg text-white dark:text-black"
            />
          </div>
          <button
            className="w-36 rounded-md p-2 m-1 transition-colors duration-200 bg-blue-500 text-white hover:bg-cyan-500 active:bg-slate-700 focus:outline-none"
            onClick={() => handleUpdateProduct(product._id, updatedProduct)}
          >
            Update
          </button>
          <button
            onClick={closeModal}
            className="w-36 rounded-md p-2 m-1 transition-colors duration-200 bg-red-500 text-white hover:bg-orange-400 active:bg-slate-700 focus:outline-none"
          >
            Cancel
          </button>
        </div>
      </Modal>
    </>
  );
};
