// type MyExclude<T, U> =
type MyExclude<T, U> = T extends U ? never : T;
type T0 = MyExclude<"a" | "b" | "c", "a">;
type T1 = MyExclude<"a" | "b" | "c", "a" | "b">;
type T2 = MyExclude<string | number | (() => void), Function>;

// Expect<Equal<MyExclude<"a" | "b" | "c", "a">, Exclude<"a" | "b" | "c", "a">>>,
// Expect<Equal<MyExclude<"a" | "b" | "c", "a" | "b">, Exclude<"a" | "b" | "c", "a" | "b">>>,
// Expect<Equal<MyExclude<string | number | (() => void), Function>, Exclude<string | number | (() => void), Function>>>,
//
