import { generate } from "promptparse";

export const genQR = (target: string, value?: number | null) => {
  const payload = generate.anyId({
    type: "NATID",
    target: target,
    amount: value !== null && value !== undefined ? value : 0,
  });

  return payload;
};
