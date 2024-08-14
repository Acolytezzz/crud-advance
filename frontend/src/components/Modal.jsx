export const Modal = ({ open, onClose, children }) => {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors
        ${open ? "visible bg-black/20" : "invisible"}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-[#f9f7e5] dark:bg-[#065465] rounded-xl shadow p-6 transition-all
        ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
      >
        <button
          className="absolute text-lg font-bold top-2 right-2 px-3 py-1 rounded-full text-black dark:text-gray-50 hover:text-gray-50 dark:hover:text-gray-600 hover:bg-gray-600 dark:hover:bg-gray-50"
          onClick={onClose}
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};
