import { useState } from "react";
import ExploreMenu from "../../ExploreMenu/ExploreMenu";
import Header from "../../Header/Header";
import "./Home.css";
import DisplayFood from "../../DisplayFood/DisplayFood";
import AppDownload from "../../AppDownload/AppDownload";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <DisplayFood category={category} />
      <AppDownload />
    </div>
  );
};

export default Home;
