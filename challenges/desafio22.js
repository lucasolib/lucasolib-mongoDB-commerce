db.produtos.updateMany({},
  { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] } });
db.produtos.updateMany({ name: "Big Mac" },
  { $set: { vendasPorDia: [0, 0, 0, 60, 0, 0, 0] } });
db.produtos.updateMany({ tags: { $in: ["bovino"] } },
  { $set: { vendasPorDia: [0, 0, 0, 60, 0, 0, 120] } });
db.produtos.find({}, { nome: 1, vendasPorDia: 1, _id: 0 });