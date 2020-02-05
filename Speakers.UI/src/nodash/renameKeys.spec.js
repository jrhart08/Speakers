/* eslint-env jest */
/* eslint-disable camelcase,prefer-arrow-callback,func-names */
/* eslint-disable no-use-before-define,no-param-reassign */
import test from 'jest-gwt';
import renameKeys from './renameKeys';

describe('renameKeys', () => {
  test('renames existing keys', {
    given: {
      an_object,
      key_renaming_map,
    },
    when: {
      renaming_keys,
    },
    then: {
      original_object_NOT_modified,
      new_object_DOES_NOT_have_ORIGINAL_MAPPED_keys,
      new_object_has_RENAMED_keys,
      new_object_has_UNMAPPED_keys,
    },
  });

  test('ignores extra keys in mapping', {
    given: {
      an_object,
      key_renaming_map_WITH_EXTRA_KEYS,
    },
    when: {
      renaming_keys,
    },
    then: {
      new_object_DOES_NOT_have_EXTRA_MAPPED_keys,
    },
  });
});

function an_object() {
  this.object = {
    firstName: 'Joseph',
    lastName: 'Joestar',
    arc: 'Battle Tendency',
  };
}
function key_renaming_map() {
  this.renaming_map = {
    lastName: 'surname',
    arc: 'previousArc',
  };
}
function key_renaming_map_WITH_EXTRA_KEYS() {
  this.renaming_map = {
    lastName: 'surname',
    arc: 'previousArc',
    grandfather: 'Jonathan',
  };
}
function renaming_keys() {
  this.new_object = renameKeys(this.renaming_map)(this.object);
}
function original_object_NOT_modified() {
  expect(this.object).toEqual({
    firstName: 'Joseph',
    lastName: 'Joestar',
    arc: 'Battle Tendency',
  });
}
function new_object_DOES_NOT_have_ORIGINAL_MAPPED_keys() {
  expect(this.new_object).not.toEqual(expect.objectContaining({
    arc: 'Battle Tendency',
  }));
  expect(this.new_object).not.toEqual(expect.objectContaining({
    lastName: 'Joestar',
  }));
}
function new_object_has_RENAMED_keys() {
  expect(this.new_object).toEqual(expect.objectContaining({
    surname: 'Joestar',
    previousArc: 'Battle Tendency',
  }));
}
function new_object_has_UNMAPPED_keys() {
  expect(this.new_object).toEqual(expect.objectContaining({
    firstName: 'Joseph',
  }));
}
function new_object_DOES_NOT_have_EXTRA_MAPPED_keys() {
  expect(this.new_object).not.toEqual(expect.objectContaining({
    grandfather: 'Jonathan',
  }));
}
