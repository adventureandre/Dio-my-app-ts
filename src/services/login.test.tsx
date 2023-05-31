import {login} from "./login";

describe('login',()=>{

    const mockAlert = jest.fn()
    window.alert  = mockAlert

    it('Deve Exibir um alert com boas Vindas', function () {
        login()
        expect(mockAlert).toHaveBeenCalledWith('Bem vindo')
    });
})