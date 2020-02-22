import { fetchData } from './fetchData';

// test('fetchData 返回结果为 { success: true }', done => {
//     fetchData((data) => {
//         expect(data).toEqual({
//             success: true
//         })
//         done();
//     })
// })

test('fetchData 返回结果为 { success: true }', () => {
    return fetchData().then(response => {
        console.log(response.data)
        expect(response.data).toEqual({
            success: true
        })
    })
})

// test('the fetch fails with an error 404', () => {
//     expect.assertions(1);
//     return fetchData().catch(e => expect(e.toString().indexOf('404') > -1).toBe(true));
// });


test('fetchData 返回结果为 { success: true }', async () => {
    await expect(fetchData()).resolves.toMatchObject({
        data: {
            success: true
        }
    })
})