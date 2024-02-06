import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Category from "./components/Category";
import CardList from "./components/CardList";

import { useState } from "react";
import { items } from "./Data";

function App() {
  const [itemsData, setitemsData] = useState(items);
  // get all cat
  const allCategory = ["الكل", ...new Set(items.map((i) => i.category))];
  console.log(allCategory);
  // filter by category

  const filterbyCategory = (cat) => {
    if (cat === "الكل") {
      setitemsData(items);
    } else {
      const newArray = items.filter((item) => item.category === cat);
      setitemsData(newArray);
    }
  };

  // search
  const filterbySearch = (word) => {
    if (word !== "") {
      const newArray = items.filter((item) => item.title === word);
      setitemsData(newArray);
    }
  };

  return (
    <div className=" color-body">
      <NavBar filterbySearch={filterbySearch} />
      <Container>
        <Header />
        <Category
          filterbyCategory={filterbyCategory}
          allCategory={allCategory}
        />
        <CardList itemsData={itemsData} />
      </Container>
    </div>
  );
}

export default App;
