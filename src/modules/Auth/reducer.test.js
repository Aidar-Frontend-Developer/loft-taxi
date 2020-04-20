import { authReducer } from './reducer';

describe('Тестирование редьюсера authReducer', () => {
    it('Тест postLoginRequest', () => {
        let result = authReducer({}, { type: 'POST_LOGIN_REQUEST' });
        expect(result.isLoading).toBe(true);
        expect(result.error === '').toBe(true);
    });
    it('Тест postRegisterRequest', () => {
        let result = authReducer({}, { type: 'POST_REGISTER_REQUEST' });
        expect(result.isLoading).toBe(true);
        expect(result.error === '').toBe(true);
    });
    it('Тест postLoginSuccess', () => {
        let result = authReducer(
            {},
            { type: 'POST_LOGIN_SUCCESS', payload: { success: true, token: '123' } },
        );
        expect(result.isLoading).toBe(false);
        expect(result.isAuthorized).toBe(true);
        expect(result.token !== '').toBe(true);
        expect(result.error === '').toBe(true);
    });
    it('Тест postRegisterSuccess', () => {
        let result = authReducer(
            {},
            { type: 'POST_REGISTER_SUCCESS', payload: { success: true, token: '123' } },
        );
        expect(result.isLoading).toBe(false);
        expect(result.isAuthorized).toBe(true);
        expect(result.token !== '').toBe(true);
        expect(result.error === '').toBe(true);
    });
    it('Тест postLoginFailure', () => {
        let result = authReducer(
            {},
            { type: 'POST_LOGIN_FAILURE', payload: { success: false, error: 'error' } },
        );
        expect(result.isLoading).toBe(false);
        expect(result.isAuthorized).toBe(false);
        expect(result.error !== '').toBe(true);
    });
    it('Тест postRegisterFailure', () => {
        let result = authReducer(
            {},
            { type: 'POST_REGISTER_FAILURE', payload: { success: false, error: 'error' } },
        );
        expect(result.isLoading).toBe(false);
        expect(result.isAuthorized).toBe(false);
        expect(result.error !== '').toBe(true);
    });
    it('Тест postLogOut', () => {
        let result = authReducer({}, { type: 'POST_LOGOUT' });
        expect(result.isLoading).toBe(false);
        expect(result.isAuthorized).toBe(false);
        expect(result.error === '').toBe(true);
    });
});
