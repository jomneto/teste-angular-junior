import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { Backend } from "./backend.service";

const bk = new Backend()

/** A code's name cannot be repeated */
export function codeProductExists (code: string){
  return bk.getAll().some(element => {
    if(element.getCode() == code) return true
    else return false
  })
}


