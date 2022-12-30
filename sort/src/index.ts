import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
const numbersCollection = new NumbersCollection([-5, 10, 0, 20, -1]);
const sorter = new Sorter(numbersCollection);
sorter.sort();

console.log(numbersCollection.data);