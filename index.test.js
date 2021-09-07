const mooncakeSays =require('./index')

test('mooncake knows what to say', () => {
    expect(mooncakeSays('woooahhhhhhhhh!')).toBe('(o.o) woooahhhhhhhhh!');
});

test('mooncake is not sure what to say', () => {
    expect(mooncakeSays()).toBe('(o.o) chookity?');
});
