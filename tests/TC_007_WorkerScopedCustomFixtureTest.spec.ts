import {test} from '../fixtures/workerFixture'

//worker - shared by tests executed within the same worker
test("Test One",async({workerInfo})=>{
    console.log(workerInfo)
});

test("Test Two", async({workerInfo})=>{
    console.log(workerInfo)
})
test("Test Three", async({workerInfo})=>{
    console.log(workerInfo)
})