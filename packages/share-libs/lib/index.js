"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixedData = {
    f1: 'name',
    f2: 'age',
};
exports.myRandomNoGenerator = function (min, max) {
    if (typeof max !== 'number' && typeof min !== 'number') {
        min = 0;
        max = 1;
    }
    return Math.random() * (max - min) + min;
};
exports.FixedData7 = {
    f1: 'name',
    f2: 'age',
};
// export interface IData = {
// 	f1: 'name',
//     f2: 'age',
//     f3: 'address'
// };
// export interface IData2 = {
// 	f1: 'name',
//     f2: 'age',
//     f3: 'address'
// };
// export interface IData3 = {
// 	f1: 'name',
//     f2: 'age',
//     f3: 'address'
// };
