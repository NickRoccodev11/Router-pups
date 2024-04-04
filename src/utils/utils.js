const utils = {
  fetchPuppies: async (BASE_URL, setPuppyList) => {
    const res = await fetch(`${BASE_URL}/players`);
    const puppiesData = await res.json();
    setPuppyList(puppiesData.data.players);
  },
};
export default utils;
