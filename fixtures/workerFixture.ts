import {test as base} from '@playwright/test'

type workerFixture={
    workerInfo:string;
}

export const test=base.extend<{},workerFixture>({
    workerInfo:[
        async({}, use, workerInfo)=>{
            const workerId=workerInfo.workerIndex;
            console.log(`setting up worker ${workerId}`);

            await use(`worker-${workerId}`);

            console.log(`cleaning up worker-${workerId}`);
        },
        {scope:'worker'}
    ]
})