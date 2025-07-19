import { generate } from "promptparse";

export const genPayload = (target: string, value?: number | null) => {
  const payload = generate.anyId({
    type: "NATID",
    target: target,
    amount: value !== null && value !== undefined ? value : 0,
  });

  console.log(target, value);
  console.log(payload);

  return payload;
};
