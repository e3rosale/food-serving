import { useEffect, useState } from "react";
import { fetchProductsByCategory } from "../../api";
import { useMenuState } from "../../stores/menu/MenuStateContext";
import { setProductsByCategory } from "../../stores/menu/MenuDispatchActions";
import ProductDetailCard from "../../components/ProductDetailCard";
import { Tabs } from "../../components/Tabs";

const Menu = () => {
  const [menuState, menuDispatch] = useMenuState();
  const [activeTab, setActiveTab] = useState();
  const [activeTabIndex, setActiveTabIndex] = useState();

  useEffect(() => {
    fetchProductsByCategory()
      .then(productsByCategory => {
        const products = productsByCategory.data;
        const initialCategoryTabName = products[0]?.name.name;

        if (products.length > 0 && initialCategoryTabName) {
          menuDispatch(setProductsByCategory(productsByCategory));
          setActiveTab(initialCategoryTabName);
          setActiveTabIndex(0)
        }
      })
      .catch(error => console.log(error))
  }, []);

  const onTabSwitch = (newActiveTab, index) => {
    setActiveTab(newActiveTab);
    setActiveTabIndex(index);
  }

  return (
    <div className="bg-white">
      {
        'notPending' === 'pending' ? <div>Loading...</div> : 
        menuState.products.length > 0 && 
          <div className="menu-wrapper">
            {
              <Tabs list={menuState.products.map(category => category.name.name)} activeTab={activeTab} onTabSwitch={onTabSwitch}/>
            }
            <div className="flex flex-row mx-3">
              {
                menuState.products[activeTabIndex]?.products.map((product, index) => {
                  return (
                    <ProductDetailCard product={product} key={index}/>
                  )
                })
              }
            </div>
          </div>
      }
    </div>
  )
}
  
export default Menu;