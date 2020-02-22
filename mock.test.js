import { fetchData } from './mock'
import axios from 'axios'
jest.mock('axios');
test('fetchData 测试', () => {
    axios.get.mockResolvedValue({
        data: "(function(){return '123'})()"
    })
    return fetchData().then(data => {
        expect(eval(data)).toEqual('123');
    })
})