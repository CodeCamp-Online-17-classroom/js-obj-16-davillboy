// write code here
const state1 = { username: 'john', point: 100, loading: true };

const newStatenaja = Object.assign({}, state1, { loading: false, point: 75, success: true });

console.log(newStatenaja);
