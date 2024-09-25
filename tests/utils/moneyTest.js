import formatCurrency from "../../scripts/utils/money.js";

describe('test suite: formatCurrency', ()=>{
    it('converts cents into dollar test', ()=>{
        expect(formatCurrency(2095)).toEqual('20.95');
    });

    it('works with zero', ()=>{
        expect(formatCurrency(0)).toEqual('0.00');
    });

    it('rounds up to the nearest cent', ()=>{
        expect(formatCurrency(2000.5)).toEqual('20.01');
    });

    it('rounds up to the nearest cent pt2', ()=>{
        expect(formatCurrency(2000.4)).toEqual('20.00')
    });

    it('works with negative number', ()=>{
        expect(formatCurrency(-3090)).toEqual('-30.90')
    });
});