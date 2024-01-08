
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../shared/MenuItem/MenuItem";
import UseMenu from "../../../Hooks/UseMenu/UseMenu";


const PopularMenu = () => {
    const [menu] = UseMenu();
    const popular = menu.filter(item => item.category === 'popular');
    // const [menu, setMenu] = useState([]);
    // useEffect(() => {
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const popularItem = data.filter(item => item.category === 'popular');
    //         setMenu(popularItem)
    //     })
    // },[])
    return (
        <section className="mb-10">
            <SectionTitle
            subHeading={"---Check it out---"}
            heading={"FROM OUR MENU"}
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItem 
                        key={item._id}
                        item={item}
                        ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;