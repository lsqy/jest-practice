import Counter from './Counter'

// describe相当于分组
describe('测试Counter', () => {
    let counter = null;
    beforeAll(() => {
        console.log('beforeAll')
        // counter = new Counter();
    })
    
    beforeEach(() => {
        console.log('beforeEach')
        counter = new Counter();
    })
    
    afterEach(() => {
        console.log('afterEach')
    })
    
    afterAll(() => {
        console.log('afterAll')
    })
    
    describe('测试添加相关方法', () => {
        test('测试 addOne方法', () => {
            counter.addOne();
            expect(counter.num).toBe(1);
        })
        
        test('测试 addTwo方法', () => {
            counter.addTwo();
            expect(counter.num).toBe(2);
        })
    })
    
    describe('测试减少相关方法', () => {
        test('测试 minusOne方法', () => {
            counter.minusOne();
            expect(counter.num).toBe(-1);
        })
        
        test('测试 minusTwo方法', () => {
            counter.minusTwo();
            expect(counter.num).toBe(-2);
        })
    })
})

