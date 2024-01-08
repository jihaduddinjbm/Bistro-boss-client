import { Helmet,} from 'react-helmet-async';
import Cover from '../../shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import soupImg from '../../../assets/menu/soup-bg.jpg';
import UseMenu from '../../../Hooks/UseMenu/UseMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = UseMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <div>
            <Helmet>
        <title> Bistro Boss | Menu</title>
      </Helmet>
       <Cover img={menuImg} title={"our menu"}></Cover>
       {/* main title */}
       <SectionTitle subHeading={"Don't miss"} heading={"Today's offer"}></SectionTitle>
       {/* offered */}
         <MenuCategory items={offered}></MenuCategory>
         {/* dessert */}
         <MenuCategory items={dessert}
         title={"dessert"}
         img={dessertImg}
         ></MenuCategory>
         <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
         <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>
         <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;