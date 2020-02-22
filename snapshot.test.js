import { generateConfig, generateAnotherConfig } from './snapshot'

test('测试 generateConfig 函数', () => {
    expect(generateConfig()).toMatchSnapshot({
        date: 2024
    });
})

test('测试 generateAnotherConfig 函数', () => {
    expect(generateAnotherConfig()).toMatchSnapshot({
        date: 2022
    });
})