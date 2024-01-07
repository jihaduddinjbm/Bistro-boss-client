import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Review from "./Review/Review";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Review></Review>
        </div>
    );
};

export default Home;