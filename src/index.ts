import { curry2Last, curry3Last } from "ts-function"

type Transform<T, R> = (x: T, i: number) => R
type Predicate<T> = (x: T, i: number) => boolean
type Reducer<Acc, T> = (acc: Acc, x: T, i: number) => Acc

type Map = {
  <T, R>(map: Transform<T, R>, arr: T[]): R[]
  <T, R>(map: Transform<T, R>): (arr: T[]) => R[]
}
export const map = curry2Last(<T, R>(map: Transform<T, R>, arr: T[]): R[] =>
  arr.map(map),
) as Map

type Filter = {
  <T>(predicate: Predicate<T>, arr: T[]): T[]
  <T>(predicate: Predicate<T>): (arr: T[]) => T[]
}
export const filter = curry2Last(<T>(predicate: Predicate<T>, arr: T[]): T[] =>
  arr.filter(predicate),
) as Filter

type Reduce = {
  <T, Acc>(reducer: Reducer<Acc, T>, init: Acc, arr: T[]): Acc
  <T, Acc>(reducer: Reducer<Acc, T>, init: Acc): (arr: T[]) => Acc
}
export const reduce = curry3Last(
  <T, Acc>(reducer: Reducer<Acc, T>, init: Acc, arr: T[]): Acc =>
    arr.reduce(reducer, init),
) as Reduce

type ArrToBoolean = {
  <T>(predicate: Predicate<T>, arr: T[]): boolean
  <T>(predicate: Predicate<T>): (arr: T[]) => boolean
}
export const some = curry2Last(
  <T>(predicate: Predicate<T>, arr: T[]): boolean => arr.some(predicate),
) as ArrToBoolean

export const every = curry2Last(
  <T>(predicate: Predicate<T>, arr: T[]): boolean => arr.every(predicate),
) as ArrToBoolean

type Find = {
  <T>(predicate: Predicate<T>, arr: T[]): T | undefined
  <T>(predicate: Predicate<T>): (arr: T[]) => T | undefined
}
export const find = curry2Last(<T>(predicate: Predicate<T>, arr: T[]):
  | T
  | undefined => {
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i], i)) return arr[i]
  }
  return undefined
}) as Find
