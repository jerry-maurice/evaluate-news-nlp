import { handleSubmit } from '../client/js/formHandler';

test("Test this handleSubmit to see if it is a function", ()=>{
    expect(typeof handleSubmit).toBe("function");
});