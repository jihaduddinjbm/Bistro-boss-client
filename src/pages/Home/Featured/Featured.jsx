import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import './featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-black  pt-8 my-20">
            <SectionTitle
            subHeading={"---Check it out---"}
            heading={"FROM OUR FEATURE"}
            ></SectionTitle>
            <div className="md:flex justify-center bg-opacity-60 items-center pb-20 pt-12 px-36 ">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-8 text-white">
                    <p>March 20, 2023</p>
                    <p className="uppercase">WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline uppercase bottom-0 border-b-4">order now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;