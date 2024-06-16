import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

type GeneratorFunction<T> = () => T;
type GeneratorObject<T> = {
  run: GeneratorFunction<T>
}
type Generator<T> = GeneratorFunction<T> | GeneratorObject<T>
function runGenerator<T>(generator: Generator<T>) {
  if (typeof generator === "function") {
    return generator();
  }
  return generator.run();
}

it("Should accept an object where the generator is a function", () => {
  const result = runGenerator({
    run: () => "hello",
  });

  expect(result).toBe("hello");

  type test1 = Expect<Equal<typeof result, string>>;
});

it("Should accept an object where the generator is a function", () => {
  const result = runGenerator(() => "hello");

  expect(result).toBe("hello");

  type test1 = Expect<Equal<typeof result, string>>;
});
