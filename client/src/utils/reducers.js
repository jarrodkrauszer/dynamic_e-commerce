import {
  UPDATE_USER,
  UPDATE_COMPANY_INFO,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
  UPDATE_SALES
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_USER:
      return {
        ...state,
        user: action.user
      }
    case UPDATE_COMPANY_INFO:
      return {
        ...state,
        company: action.company
      }

    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories]
      }

    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory
      }

    case UPDATE_SALES:
      return {
        ...state,
        sales: [...action.sales]
      }

    default:
      return state;
  }
}