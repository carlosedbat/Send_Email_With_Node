"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validator_1 = __importDefault(require("validator"));
let nome = 'Carlos';
let idade = 90;
console.log(validator_1.default.isEmail('carlosedbat@gmail.com'));
console.log(`Meu nome é ${nome}, e minha idade é ${idade} anos.`);
