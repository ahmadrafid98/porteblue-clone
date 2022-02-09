import ProductFooterCard from "./ProductFooterCard";

function AsideLeft() {
  return (
    <div className="flex-1 p-6">
      <h2 className="text-sm uppercase font-bold mb-7">Saring Berdasarkan</h2>
      <form>
        <select
          className="w-full p-2 mb-7 text-sm ring-2 ring-gray-200 outline-none focus:ring-blue-400"
          name="orderby"
        >
          <option value="" disabled selected hidden>
            Size apapun
          </option>
          <option value="39">39</option>
          <option value="40">40</option>
          <option value="41">41</option>
          <option value="42">42</option>
          <option value="43">43</option>
        </select>
      </form>
      <h2 className="text-sm uppercase font-bold mb-7">Ulasan Terbaru</h2>
      <div className="w-full">
        <ProductFooterCard />
        <ProductFooterCard />
        <ProductFooterCard />
      </div>
    </div>
  );
}

export default AsideLeft;
