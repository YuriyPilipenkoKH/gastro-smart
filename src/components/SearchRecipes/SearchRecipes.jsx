import { useDispatch, useSelector } from "react-redux";
import { ButtonSearch, InputSearch, LabelSearch, WrapSearch } from "./SearchRecipes.styled"
import { setFilterRecipes } from "redux/filter/filterSlice";
import { getRecipesFilter } from "redux/filter/filterSelectors";
import { RxCross1 } from "react-icons/rx";
import { FlatButton } from "components/Button/Button";

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
      <span>Go to Global Search ˃</span>
      <WrapSearch>
        <InputSearch
         type="text"
         value={filter}
         name="search"
         onChange={onInputChange}
         placeholder="Search for your recipes..." />
        {filter &&  <FlatButton
                           type="button"
                           onClick={clearInput}
                           className="search-cross">
                           <RxCross1 style={{ color: '#ffc107' }} />
                    </FlatButton>}                                               
        <ButtonSearch type="button"> Search</ButtonSearch>
      </WrapSearch>
    </LabelSearch>
  )
}