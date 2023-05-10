import { Divider, Input } from "antd";
import { useState } from "react";

// Iteration 5
function Search({ setFoodState, foodState }) {
  const [searchedFood, setSearchedFood] = useState();
  const handleChange = (event) => {
    setFoodState([...foodState]);
    event.preventDefault();
    const foundFoods = foodState.filter((food) => {
      return food.name.toLowerCase().includes(searchedFood.toLowerCase());
    });
    setFoodState(foundFoods);
  };

  return (
    <>
      <Divider>Search</Divider>
      <form onChange={handleChange}>
        <label>Search</label>
        <Input
          value={searchedFood}
          type="text"
          onChange={(event) => {
            setSearchedFood(event.target.value);
          }}
        />
      </form>
    </>
  );
}

export default Search;
