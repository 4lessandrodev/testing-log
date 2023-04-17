import { Step } from "ts-logs";
import globalLog from "../log";


export class Service {
    execute(): void {
        globalLog.addStep(
            Step.info({ 
                name: 'Service', 
                message: 'service step 01' 
            })
        );
    }
}

export default Service;
