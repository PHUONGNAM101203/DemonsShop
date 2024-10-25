import React, { Fragment, createContext, useReducer } from "react";
import Layout from "../layout";
import Slider from "./Slider";
import ProductCategory from "./ProductCategory";
import { homeState, homeReducer } from "./HomeContext";
import IntroduceAboutShop from "./IntroduceAboutShop";
import { useHistory } from "react-router-dom";
export const HomeContext = createContext();

const AboutUs = () => {
  return (
    <section className="about-us-section">
      <div className="about-us-container">
        <h2>Về Chúng Tôi</h2>
        <p>
          Chào mừng bạn đến với cửa hàng trung gian bán áo quần của chúng tôi! Chúng tôi tự hào là cầu nối giữa các thương hiệu thời trang uy tín và khách hàng. Với sứ mệnh mang đến những sản phẩm thời trang chất lượng, phù hợp với phong cách và nhu cầu của từng người, chúng tôi cam kết mang lại sự hài lòng tối đa cho khách hàng. Cảm ơn bạn đã tin tưởng và ủng hộ!
        </p>
        <a href="/contact-us" className="btn-contact">Liên hệ với chúng tôi</a>
      </div>

      {/* Phần phong cảnh */}
      
    </section>
  );
};


const HomeComponent = () => {
  return (
    <Fragment>
      <Slider />
      <section className="mr-6 ml-6">
        <IntroduceAboutShop />
      </section>
      <section className="mr-4 ml-4 mb-20">
        <ProductCategory />
      </section>
      <AboutUs />
    </Fragment>
  );
};

const Home = (props) => {
  const [data, dispatch] = useReducer(homeReducer, homeState);
  return (
    <Fragment>
      <HomeContext.Provider value={{ data, dispatch }}>
        <Layout children={<HomeComponent />} />
      </HomeContext.Provider>
    </Fragment>
  );
};

export default Home;
