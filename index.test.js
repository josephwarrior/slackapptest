const mooncakeSays =require('./index')

test('mooncake knows what to say', () => {
    expect(mooncakeSays('woooahhhhh!')).toBe('(o.o) woooahhhhh!');
});

test('mooncake is not sure what to say', () => {
    expect(mooncakeSays()).toBe('(o.o) chookity?');
});
