import { useState } from "react";
import "./App.css";
import foods from "./foods.json";
import FoodBox from "../Components/FoodBox";
import { Card, Row, Col, Divider, Input, Button } from "antd";
import AddFoodForm from "../Components/AddFoodFrom";
import Search from "../Components/Search";

function App() {
  const [foodState, setFoodState] = useState(foods);

  return (
    <div className="App">
      <div>
        {<AddFoodForm setFoodState={setFoodState} foodState={foodState} />}
        <Button> Hide Form / Add New Food </Button>
        {<Search setFoodState={setFoodState} foodState={foodState} />}
        <Divider>Food List</Divider>
        <Row style={{ width: "100%", justifyContent: "center" }}>
          {foodState.map((food) => (
            <FoodBox food={food} />
          ))}
        </Row>
      </div>
    </div>
  );
}

export default App;
