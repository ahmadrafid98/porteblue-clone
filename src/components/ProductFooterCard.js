function ProductFooterCard() {
  return (
    <div className="w-full pb-6 mb-6 border-b-2 border-gray-200 flex justify-between items-center">
      <div className="w-full text-sm">
        <a
          className="h-auto py-2 pr-40 outline-none hover:text-yellow-500 focus:text-yellow-500 focus:ring-1 focus:ring-yellow-500"
          href="#"
        >
          <span>Black Moctoe Boots CMT</span>
          <img
            className="w-16 h-16 border-2 border-gray-200 float-right"
            src="https://i2.wp.com/portblueshoes.com/wp-content/uploads/2021/01/748.jpg?resize=640%2C640&ssl=1"
            alt="product"
          />
        </a>
        <div className="mt-2">⭐⭐⭐⭐⭐</div>
        <p className="text-gray-600">Oleh Anonymous</p>
      </div>
    </div>
  );
}

export default ProductFooterCard;
