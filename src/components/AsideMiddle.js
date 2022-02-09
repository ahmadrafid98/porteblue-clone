import ProductFooterCard from "./ProductFooterCard";

function AsideMiddle() {
  return (
    <div className="flex-1 p-6">
      <h2 className="text-sm uppercase font-bold mb-7">
        Produk Peringkat Teratas
      </h2>
      <div className="w-full">
        <ProductFooterCard />
        <ProductFooterCard />
        <ProductFooterCard />
        <ProductFooterCard />
      </div>
    </div>
  );
}

export default AsideMiddle;
