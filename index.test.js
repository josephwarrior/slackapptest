const mooncakeSays =require('./index')

test('mooncake knows what to say', () => {
    expect(mooncakeSays('woooahhhhhhh!')).toBe('(o.o) woooahhhhhhh!');
});

test('mooncake is not sure what to say', () => {
    expect(mooncakeSays()).toBe('(o.o) chookity?');
});
