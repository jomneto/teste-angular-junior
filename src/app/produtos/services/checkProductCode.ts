import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { Backend } from "./backend.service";

const bk = new Backend()

/*export function codeExists (code: string){
  return bk.getAll().some(element => {
    if(element.getCode() == code) return true
    else return false
  })
}*/

/** A code's name cannot be repeated */
export function codeExists (code: string){
  const data = bk.getAll()
  const res = data.findIndex(data => data.getCode() == code)
  if(res >= 0 ) return true
  return false
}


export function sameObject (id: number, code: string){ console.log(id)
  const data = bk.getAll()
  const res = data.findIndex(data => data.getId() == id && data.getCode() == code)
  if(res >= 0 ) return true
  return false
}

