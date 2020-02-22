jest.mock('./util');
import Util from './util';
import demoFunction from './demo'

test('test demoFunction', () => {
    demoFunction()
    expect(Util).toHaveBeenCalled();
    expect(Util.mock.instances[0].a).toHaveBeenCalled();
    expect(Util.mock.instances[0].b).toHaveBeenCalled();
})