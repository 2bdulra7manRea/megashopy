
// this is a pure function it takes tow paramters
// state , action then return object or state




function reducer(
  state = {
  isauth: false,
  itemsCart:'',
  numberofitems:0,
  categories:''  
  }
  
  , action) {
  switch (action.type) {
    case "DO_AUTH":
      return {
        ...state,
        isauth: action.payload,
      };
    case "ADD_TO_CART":
      return {
        ...state,
      itemsCart:[...state.itemsCart,action.payload]
      };
    case "ADD_NUMBER_TO_CART":
      return {
        ...state,
        numberofitems: action.payload,
      };
    case "ADD_Category_Name":
      return {
        ...state,
        categories: action.payload,
      };

    default:
      return state;
  }
}



export default reducer;

