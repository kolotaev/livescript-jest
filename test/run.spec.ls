test = it
describe "Aliasing livescript's `it` with `test`" !->
  test 'should work for testing equal 9' ->
    expect 4 + 5 .to-be 9

  test 'should work for testing equal 200' ->
    multiplier = -> &0 * &1
    expect multiplier 4, 50 .to-be 200


describe 'Another way to write `it`' (,) !->
  it 'should work for testing equal BAR' ->
    a = \b
    b = 'AR'
    expect "#{ a.toUpperCase! }#b" .toBe \BAR
