describe('The Question Detail list',()=>{

    beforeEach(()=>{
        console.log("beforeEach")
    });

    it('Should display a list item',()=>{
                expect(40+2).toEqual(42)
    });

    it.only('Should display ',()=>{
        expect(41+2).toEqual(43)
    });

    beforeAll(()=>{
        console.log("beforeAll")
    });

    afterEach(()=>{
        console.log("afterEach")
    });
    afterAll(()=>{
        console.log("afterAll")
    });
})