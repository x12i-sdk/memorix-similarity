import assert from 'node:assert/strict';
import { createMemorixSimilarityClient, ensureSimilarityIndex, querySimilarRecords } from '@x12i/memorix-similarity';
const calls = [];
const backend = { name: 'fixture',
  async ensureIndex(spec, field) { calls.push(spec.objectType); return { ok: true, indexName: 'fixture-index', field: field.field, created: true, updated: false }; },
  async dropIndex() { return { ok: true }; },
  async query(spec, input) { assert.equal(spec.objectType, 'asset'); assert.equal(input.text, 'laptop'); return { ok: true, hits: [{ recordId: 'asset-1', score: 0.9, matchedFields: ['name'] }] }; },
};
const client = createMemorixSimilarityClient({ backend });
const indexes = await ensureSimilarityIndex(client, { objectType: 'asset', target: 'entity', collection: 'assets', database: 'fixture-db', fields: [{ field: 'name', kind: 'text' }] });
assert.equal(indexes[0].created, true);
const result = await querySimilarRecords(client, { objectType: 'asset', field: 'name', text: 'laptop', limit: 1 });
assert.equal(result.hits[0].recordId, 'asset-1');
assert.equal(calls.length, 1);
console.log(result);
