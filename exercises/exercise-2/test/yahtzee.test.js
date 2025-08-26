

test("scoring Chance add all dice", () => {
    expect(yatzeeScore("Chance", [1, 2, 3, 4, 5])).toBe(1+2+3+4+5);
});