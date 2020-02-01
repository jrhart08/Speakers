/* eslint-env jest */
import renameKeys from './renameKeys';

describe('renameKeys', () => {
  it('Should... rename keys', () => {
    const protagonist = {
      firstName: 'Joseph',
      lastName: 'Joestar',
      arc: 'Battle Tendency',
    };

    const deuteragonist = renameKeys({
      lastName: 'surname',
      arc: 'previousArc',
    })(protagonist);

    expect(deuteragonist).toEqual({
      firstName: 'Joseph',
      surname: 'Joestar',
      previousArc: 'Battle Tendency',
    });
  });
});
