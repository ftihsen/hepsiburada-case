import {dataSorting,isEqualObj,priceFormat,unionBy} from "./helpers"

describe("Helper test",()=> {

    it("data sorting",()=> {
        const data = [
            {
              id: '1',
              brand: 'Apple',
              price: 12000,
            },
            {
              id: '2',
              brand: 'LG',
              price: 9085,
            },
          ];
          const sort = { id: 1, direction: 'asc', selectorName: 'price', text: 'En Düşük Fiyat' };
        
          const result = [
            {
              id: '2',
              brand: 'LG',
              price: 9085,
            },
            {
              id: '1',
              brand: 'Apple',
              price: 12000,
            },
          ];
        
          expect(dataSorting(data, sort)).toEqual(result);
    });

    it("parity check of objects",()=> {
        const dataOne = { id: 1, direction: 'asc', selectorName: 'price', text: 'En Düşük Fiyat' };
        const dataTwo = { id: 1, direction: 'asc', selectorName: 'price', text: 'En Düşük Fiyat' };
        const result = true;
        expect(isEqualObj(dataOne, dataTwo)).toEqual(result);
    });

    it('conversion from number to currency', () => {
        const data = 100.5;
        const result = '100,50';
        expect(priceFormat(data)).toEqual(result);
    });

    it('merge as uniq name', () => {
        const data = [
            {
            id: '1',
            isAddedBasket: false,
            currentPrice: 16000,
            discountRate: 20,
            },
            {
            id: '2',
            isAddedBasket: false,
            currentPrice: 400,
            discountRate: 20,
            },
        ];

        const dataTwo = [
            {
            id: '1',
            isAddedBasket: true,
            currentPrice: 16000,
            discountRate: 20,
            },
        ];

        const result = [
            {
            id: '1',
            isAddedBasket: true,
            currentPrice: 16000,
            discountRate: 20,
            },
            {
            id: '2',
            isAddedBasket: false,
            currentPrice: 400,
            discountRate: 20,
            },
        ];
        expect(unionBy(data, dataTwo, 'id')).toEqual(result);
    });

})