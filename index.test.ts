import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

void describe('hello-ts', () => {
  void it('should pass a basic sanity check', () => {
    assert.equal(1 + 1, 2);
  });
});
