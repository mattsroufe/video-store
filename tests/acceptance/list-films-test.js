import { test } from 'qunit';
import moduleForAcceptance from 'video-store/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list films');

test('visiting /list-films', function(assert) {
  visit('/films');

  andThen(function() {
    assert.equal(currentURL(), '/films');
  });
});

test('should list available rentals.', function (assert) {
  visit('/films');
  andThen(function() {
    assert.equal(find('h1').text(), 'Films', 'should have a heading');
    assert.equal(find('tbody tr').length, 3, 'should show the films table');
  });
});
