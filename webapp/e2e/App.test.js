import { Selector } from 'testcafe';

fixture`Getting Started`
  .page`http://localhost:3000`;

test('Should have button to get into register section', async (t) => {
  await t
    .click('.register');
});

test('Should goto registration section when register is clicked', async (t) => {
  await t
    .click('.register')
    .expect(Selector('.title').innerText).eql('Registration');
});
