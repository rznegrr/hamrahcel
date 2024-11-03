function InputSearch() {
  return (
    <div className="relative border border-border-color rounded-xl">
      <form>
        <input
          type="search"
          className="px-3 py-2 bg-[#ebedf07a] w-full rounded-xl relative placeholder:text-sm"
          placeholder="جستجوی محصول"
        />
        <button type="submit" className="text-md absolute top-2 left-5">
          <i className="bi bi-search text-gray"></i>
        </button>
      </form>
    </div>
  );
}

export default InputSearch;
