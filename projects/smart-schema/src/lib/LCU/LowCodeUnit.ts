import { Variable } from "./Variable";
import { Mutation } from "./Mutation";

/**
 * The root configuration for creating Low Code Units in Typescript.
 */
export class LowCodeUnit {
    /** The key represents the Mutation name, and the value is either a {@link Mutation} definition. */
    public Mutations: { [name: string]: Mutation };
    
    /** The key represents the Variable name, and the value is either a string specifying the type or a {@link Variable} definition. */
    public Variables: { [name: string]: string | Variable }
}