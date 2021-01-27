import Heroe from "../../models/heroeModel";

const Mutation = {
  createHeroe: async (_, { input }, { pubsub }) => {
    console.log(input);
    const newHeroe = new Heroe(input);
    await newHeroe.save();
    pubsub.publish("CHAT_CHANNEL", { articleSent: newHeroe });
    return newHeroe;
  },

  deleteHeroe: async (_, { _id }) => {
    return await Heroe.findByIdAndDelete(_id);
  },

  updateHeroe: async (_, { _id, input }) => {
    return await Heroe.findByIdAndUpdate(_id, input, { new: true });
  }
};

export default Mutation;
