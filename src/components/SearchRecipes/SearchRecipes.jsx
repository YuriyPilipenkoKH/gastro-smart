import { useDispatch, useSelector } from "react-redux";
import { ButtonSearch, InputSearch, LabelSearch, WrapSearch } from "./SearchRecipes.styled"
import { setFilterRecipes } from "redux/filter/filterSlice";
import { getRecipesFilter } from "redux/filter/filterSelectors";

export const SearchRecipes = () =>{
  const dispatch = useDispatch();
  const filter = useSelector(getRecipesFilter);
  const onInputChange =(e) => {
     dispatch(setFilterRecipes(e.target.value))
}

const clearInput =(e) => {
    dispatch(setFilterRecipes(''))
   
}
  return (

    <LabelSearch>Recipes
      <WrapSearch>
        <InputSearch
         type="text"
         value={filter}
         name="search"
         onChange={onInputChange}
         placeholder="Search for your recipes..."></InputSearch>
        <ButtonSearch type="button"> Search</ButtonSearch>
      </WrapSearch>
    </LabelSearch>
  )
}