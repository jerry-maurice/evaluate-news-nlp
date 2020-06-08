import { checkForName } from '../client/js/nameChecker';

test("Test the function if it exists", ()=>{
    expect(checkForName).toBeDefined();
});