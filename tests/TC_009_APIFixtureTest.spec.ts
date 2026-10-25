import {test, expect} from '../fixtures/APIFixture'

test("Get Request with APIFixture", async({apiContext})=>{
    const response=await apiContext.get(`/students/1`)

   expect(response.status()).toBe(200)

    const responseJsonData=await response.json();
    console.log(responseJsonData);
    expect(responseJsonData.id).toBe("1")
    expect(responseJsonData.name).toBe("sreekanth")
    expect(responseJsonData.courses).toContain("C++")
})