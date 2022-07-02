import { StringMapWithRename } from "@angular/compiler/src/compiler_facade_interface";

export class user {
  
    constructor(
        public nombre:   string,
        public email:    string,
        public img?:     string,
        public pasword?: string,
        public google?:  boolean,
        public role?:    string,
        public uid?:     string,
    ) {}
}