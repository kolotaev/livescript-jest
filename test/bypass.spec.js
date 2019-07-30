describe('Preprocessor', () => {
  it('should bypass .js files', () => {
      expect('foo').toMatch('foo')
  })
});
