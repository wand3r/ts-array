import { map, filter, reduce, some, every, find } from "./index"

const arr = [1, 2, 3]

test("map", () => {
  expect(map((x) => x * 2, arr)).toEqual([2, 4, 6])
  expect(map<number, number>((x) => x * 2)(arr)).toEqual([2, 4, 6])
})

test("filter", () => {
  expect(filter((x) => x > 1, arr)).toEqual([2, 3])
  expect(filter<number>((x) => x > 1)(arr)).toEqual([2, 3])
})

test("reduce", () {
  expect(reduce((acc, v) => acc + v, 0 ,arr)).toEqual(6);
  expect(reduce<number, number>((acc, v) => acc + v, 0)(arr)).toEqual(6);
})

test("some", () => {
  expect(some(x => x > 3,  arr)).toEqual(false)
  expect(some<number>(x => x > 2)(arr)).toEqual(true)
})

test("every", () => {
  expect(every(x => x < 10, arr)).toEqual(true)
  expect(every<number>(x => x < 3)(arr)).toEqual(false)
})

test("find", () => {
  expect(find(x => x < 3, arr)).toEqual(1);
  expect(find<number>(x => x === 5, arr)).toEqual(undefined);
})