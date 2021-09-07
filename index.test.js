const mooncakeSays =require('./index')

test('mooncake knows what to say', () => {
    expect(mooncakeSays('woooahhhhhhhhhM!')).toBe('(o.o) woooahhhhhhhhhM!');
});

test('mooncake is not sure what to say', () => {
    expect(mooncakeSays()).toBe('(o.o) chookity?');
});
