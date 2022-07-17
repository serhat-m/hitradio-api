/**
 * Checks if a string includes any value from the provided array
 * @param values Array of strings
 */
 export default function includesFromArr(this: string, values: string[]) {
    for(const value of values) {
        if(!this.toLowerCase().includes(value.toLowerCase())) {
            return false
        }
    }

    return true
}