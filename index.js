export const truncate = (str = "", maxlength) => {
  return str.length > maxlength ? str.slice(0, maxlength - 1) + "…" : str;
}

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'addTimes':
      const newDate = new Date(action.payload)
      return window.fetchAPI(newDate)
    default:
      return state
  }
}

export const initializeTimes = () => {
  return window.fetchAPI(new Date())
}