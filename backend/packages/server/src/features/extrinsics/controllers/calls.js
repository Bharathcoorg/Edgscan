const { extractPage } = require("../../../utils");
const {
  block: { getCallCollection },
} = require("@statescan/mongo");

async function getExtrinsicCalls(ctx) {
  const { page, pageSize } = extractPage(ctx);
  if (pageSize === 0 || page < 0) {
    ctx.status = 400;
    return;
  }

  const { blockHeight, extrinsicIndex } = ctx.params;

  const q = {
    "indexer.blockHeight": parseInt(blockHeight),
    "indexer.extrinsicIndex": parseInt(extrinsicIndex),
  };
  const col = await getCallCollection();
  const items = await col
    .find(q, { projection: { _id: 0 } })
    .sort({ "indexer.callIndex": 1 })
    .skip(page * pageSize)
    .limit(pageSize)
    .toArray();
  const total = await col.countDocuments(q);

  ctx.body = {
    items,
    page,
    pageSize,
    total,
  };
}

module.exports = {
  getExtrinsicCalls,
};
