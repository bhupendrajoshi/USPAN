import {
  Selector
} from 'testcafe';

fixture `Getting Started`
  .page `http://localhost:3000`;

test('Should have button to get into buyer section', async t => {
    await t
      .click('.buyer');
});

test('Should have button to get into manufacturer section', async t => {
    await t
      .click('.manufacturer');
});

test('Should goto buyers section when buyers is clicked', async t => {
    await t
      .click('.buyer')
      .expect(Selector('.title').innerText).eql('Buyers');;
});

test('Should goto manufacturers section when manufacturers is clicked', async t => {
    await t
      .click('.manufacturer')
      .expect(Selector('.title').innerText).eql('Manufacturers');;
});