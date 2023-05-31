import {soma, multiplica} from "./soma";

describe('soma', ()=>{
    it('deve somar 1 ao numero informado',()=>{
        const value =  soma(1)
        expect(value).toBe(2)
    })

    it('deve multiplicar o número por 2 ', function () {
        const value = multiplica(2,2)
        expect(value).toBe(4)
    });

    it('deve multiplicar o número por 3 ', function () {
        const value = multiplica(2,3)
        expect(value).toBe(6)
    });

    it('deve informa um erro com multiplicador diferente de 2,3 ', function () {
        const value = multiplica(2,4)
        expect(value).toBe('Multipliador não aceito')
    });
})