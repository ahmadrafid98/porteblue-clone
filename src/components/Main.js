import PorductCatalogCard from "./ProductCatalogCard";

function Main() {
  return (
    <main className="pb-16 pt-12 px-6">
      <div className="flex items-center justify-between p-6 mb-12 bg-gray-100">
        <p className="text-sm">Menampilkan semua 10 hasil</p>
        <form>
          <select
            className="p-2 text-sm outline-none ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-400"
            name="orderby"
          >
            <option value="Urutkan berdasar tren">Urutkan berdasar tren</option>
            <option value="Urutkan berdasar rata-rata rating">
              Urutkan berdasar rata-rata rating
            </option>
            <option value="Urutkan menurut yang terbaru">
              Urutkan menurut yang terbaru
            </option>
            <option value="Urutkan dari termahal">Urutkan dari termahal</option>
            <option value="Urutkan dari termurah">Urutkan dari termurah</option>
          </select>
        </form>
      </div>
      <div className="grid grid-cols-3 gap-14">
        <div>
          <PorductCatalogCard />
        </div>
        <div>
          <PorductCatalogCard />
        </div>
        <div>
          <PorductCatalogCard />
        </div>
        <div>
          <PorductCatalogCard />
        </div>
        {/* <ul className="flex flex-wrap w-full">
          <li className="flex-1 flex-shrink-0 w-auto">
            <PorductCatalog />
          </li>
          <li className="flex-1">
            <PorductCatalog />
          </li>
          <li className="flex-1">
            <PorductCatalog />
          </li>
          <li className="flex-1">
            <PorductCatalog />
          </li>
        </ul> */}
      </div>
    </main>
  );
}

export default Main;
