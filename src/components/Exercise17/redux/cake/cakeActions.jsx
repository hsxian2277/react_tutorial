import BUY_CAKE from './cakeTypes'

// Optional payload for cake
const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    payload: number,
  };
};

export default buyCake;
