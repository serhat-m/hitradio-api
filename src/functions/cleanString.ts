/**
 * Clean multiple spaces from a string
 */
 export default function cleanString(this: string) {
    return this.replace(/\s\s+/g, " ")
}