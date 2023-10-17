import { ButtonSearch, InputSearch, LabelSearch, WrapSearch } from "./SearchRecipes.styled"

export const SearchRecipes = () =>{
  return (

    <LabelSearch>Recipes
      <WrapSearch>
        <InputSearch type="text" placeholder="Search for your recipes..."></InputSearch>
        <ButtonSearch type="button"> Search</ButtonSearch>
      </WrapSearch>
    </LabelSearch>
  )
}