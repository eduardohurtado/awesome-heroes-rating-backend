import Heroe from "../../models/heroeModel";

const Query = {
  ping: () => {
    return "Pong!";
  },
  heroes: async () => {
    return await Heroe.find();
  }
};

export default Query;
