import { getJokeWithRetry } from './helpers';
import { testJoke, spy } from '../setupTests'


describe('getJokeWithRetry tests', () => {
    afterEach(() => jest.resetAllMocks())

    it('should call axios twice and return testJoke on 2nd call', async () => {
        spy.mockImplementationOnce(() => new Promise((res, rej) => rej()))
            .mockImplementationOnce(() => new Promise(res => res({ data: testJoke })));
        const result = await getJokeWithRetry();
        expect(spy).toHaveBeenCalledTimes(2);
        expect(result).toEqual(testJoke);
    });

    it('should throw an error after 9 calls', async () => {
        spy.mockImplementation(() => new Promise((res, rej) => rej()));
        expect(spy).toHaveBeenCalledTimes(0);

        try {
            const result = await getJokeWithRetry();
            console.log({ result });
        } catch (e) {
        };

        expect(spy).toHaveBeenCalledTimes(9);
    });
});