import { Step } from "ts-logs";
import globalLog from "../log";


export class Service {
    execute (): void  {
        globalLog.addStep(
            Step.info({ 
                name: 'Service', 
                message: 'service step 02' 
            })
        );
    }
}

export default Service;
