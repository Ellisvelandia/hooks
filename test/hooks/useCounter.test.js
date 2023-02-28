import { act, renderHook } from "@testing-library/react";
import { useCounter } from "../../src/hooks/useCounter";
describe("test in the counter", () => {
  test("should return the value for default", () => {
    const { result } = renderHook(() => useCounter());
    const { counter, decrement, increment, reset } = result.current;

    expect(counter).toBe(1);
    expect(increment).toEqual(expect.any(Function));
    expect(decrement).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
  });

  test("should generate counter with the value 100", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;
    expect(counter).toBe(100);
  });

  test("should increment the counter", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter, increment } = result.current;

    act(() => {
      increment();
    });

    expect(result.current.counter).toBe(101);
  });

  test("should decrement the counter", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter, decrement } = result.current;

    act(() => {
      decrement();
    });

    expect(result.current.counter).toBe(99);
  });

  test("should  test reset", () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter, reset } = result.current;

    act(() => {
      reset();
    });

    expect(result.current.counter).toBe(100);
  });
});
