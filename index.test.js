const mooncakeSays =require('./index')

test('mooncake knows what to say', () => {
    expect(mooncakeSays('woooahhhh!')).toBe('(o.o) woooahhhh!');
});

test('mooncake is not sure what to say', () => {
    expect(mooncakeSays()).toBe('(o.o) chookity?');
});
