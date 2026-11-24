import test from 'node:test';
import assert from 'node:assert/strict';
import { projects, profile } from './profile.js';

test('every project has the fields the page needs', () => {
  for (const p of projects) {
    for (const k of ['id', 'name', 'kind', 'summary', 'live', 'code', 'image', 'note']) assert.ok(p[k], `${p.id} is missing ${k}`);
    assert.ok(p.highlights.length > 0 && p.stack.length > 0);
  }
});
test('project links are https and ids are unique', () => {
  for (const p of projects) {
    assert.match(p.live, /^https:\/\//);
    assert.match(p.code, /^https:\/\/github\.com\/abdoshawky1\//);
  }
  assert.equal(new Set(projects.map((p) => p.id)).size, projects.length);
});
test('contact details look valid', () => {
  assert.match(profile.email, /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/);
  assert.match(profile.phone, /^01[0125]\d{8}$/);
});
