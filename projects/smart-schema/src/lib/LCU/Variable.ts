import { ScopeTypes } from './ScopeTypes';

/**
 * The configuration schema for Variables.
 */
export class Variable {
    /**
     * The scoped availablity of the Variable on access.
     * @default
     */
    public ScopeOnAccess: ScopeTypes = ScopeTypes.Public;

    /**
     * The scoped availablity of the Variable on store.
     * @default
     */
    public ScopeOnStore: ScopeTypes = ScopeTypes.Protected;
    
    /**
     * The security scope determines how the variable data is stored and accessed.
     * - Public specifies the value will be human readable through entire life cycle.
     * - Protected specifies the value will be human readable for store and access, but shall be always persisted as secure form.
     * - Private specifies the value will be human readable for store, but shall be accessed and persisted as secure form.
     * @default
     */
    public SecurityScope: ScopeTypes = ScopeTypes.Public;
    
    public Type: string;

    /** 
     * The key represents the Validator name, and the value is the error message to display should validation fail.
     * @default
     */
    public Validators: { [name: string]: string };
}
