jest.dontMock('../index');

require('../index');

describe('resume', function () {
  it('resume "My name is Cezar" to equal "My name..."', function () {
    expect('My name is Cezar'.resume(7)).toBe('My name...');
  });

  it('resume "Lorem ipsum dolor sit amet" to equal "Lorem ipsum [read more]"', function () {
    expect('Lorem ipsum dolor sit amet'.resume(11, ' [read more]')).toBe('Lorem ipsum [read more]');
  });

  it('resume "Hello everybody" to "Hello ever..."', function () {
    expect('Hello everybody'.resume()).toBe('Hello ever...');
  });
});