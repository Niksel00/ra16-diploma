export const saveToLocalStorage = (key, state) => {
  try {
    localStorage.setItem(key, JSON.stringify(state));
  } catch (e) {
    console.error(e);
  }
};

export const loadFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};
