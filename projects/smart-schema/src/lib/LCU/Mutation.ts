import { Procedure } from './Procedure';
import { Variable } from './Variable';

/**
 * A Mutation is the definition of how LCU State changes.
 */
export class Mutation {
    public Inputs: { [name: string]: Variable };

    public Procedure: Procedure;
    
    public Outputs: { [name: string]: Variable };
}
