declare global {
    interface String {
        clean(this: string): string,
        includesFromArr(this: string, values: string[]): boolean
    }
}

import cleanString from "../functions/cleanString"
String.prototype.clean = cleanString

import includesFromArr from "../functions/includesFromArr"
String.prototype.includesFromArr = includesFromArr