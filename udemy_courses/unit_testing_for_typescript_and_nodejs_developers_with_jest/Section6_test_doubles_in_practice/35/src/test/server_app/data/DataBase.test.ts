import { DataBase } from "../../../app/server_app/data/DataBase"
import * as IdGenerator from "../../../app/server_app/data/IdGenerator";



type someTypeWithId = {
    id: string,
    name: string,
    color: string,
}

const someObject1: someTypeWithId = {
    id: "",
    name: "dorothy",
    color: "red"
}

const someObject2: someTypeWithId = {
    id: "",
    name: "danine",
    color: "red"
}



describe("DataBase test suite", ()=>{

    // sut is for system under test.
    let sut: DataBase<someTypeWithId>;

    const fackId = '123456';    

    beforeEach(()=>{
        sut = new DataBase<someTypeWithId>();
        jest.spyOn(IdGenerator, 'generateRandomId').mockReturnValue(fackId);
    });

    it("should return id after insert", async () => {
        const actual = await sut.insert({
            id: "",
        } as any);

        expect(actual).toBe(fackId);
    });

    it("should get element after insert", async () => {
        const id = await sut.insert(someObject1);

        const actual = await  sut.getBy("id", id);
        expect(actual).toBe(someObject1);
    });

    it("should find all element with the same property", async () => {
        await sut.insert(someObject1);
        await sut.insert(someObject2);

        const expected = [someObject1, someObject2];

        const actual = await  sut.findAllBy('color', 'red');

        expect(actual).toEqual(expected);
    });

    it("should find all element with the same property", async () => {
        const id = await sut.insert(someObject1);
        const expectedColor = "blue";

        await sut.update(id, "color", expectedColor);

        const object = (await sut.getBy("id", id));

        const actualColor = object?.color;

        expect(actualColor).toBe(expectedColor);
    });


    it('should delete object', async () => {
        const id = await sut.insert(someObject1);
        await sut.delete(id);

        const actual = await sut.getBy('id', id);
        
        expect(actual).toBeUndefined();
    });

    it('should get all elements', async () => {
        await sut.insert(someObject1);
        await sut.insert(someObject2);
        const expected = [someObject1, someObject2];

        const actual = await sut.getAllElements();

        expect(actual).toEqual(expected);
    })
})