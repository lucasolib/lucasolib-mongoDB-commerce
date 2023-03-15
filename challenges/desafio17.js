db.resumoProdutos.insertOne({ franquia: "McDonalds",
  totalProdutos: { countDocuments: { from: "produtos" } } });
db.resumoProdutos.find({}, { franquia: 1, totalProdutos: 1, _id: 0 });