

const FoodCard = ({item}) => {
    const {name, recipe, image, price} = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
    <figure><img src={image} alt="Shoes" /></figure>
    <p className="text-white bg-slate-900 mt-4 mr-4 px-4 absolute right-0">$:{price}</p>
    <div className="card-body">
    <h2 className="card-title text-center">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions ">
      <button className="btn btn-primary">Add to Cart</button>
    </div>
  </div>
   </div>
    );
};

export default FoodCard;