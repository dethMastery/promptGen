import { generate } from "promptparse";

export const genPayload = (target: string, value?: number | null) => {
  var type: "MSISDN" | "NATID" | "EWALLETID" | "BANKACC" = "MSISDN";

  switch (target.length) {
    case 13:
      type = "NATID";
      break;

    case 15:
      type = "EWALLETID";
      break;

    default:
      type = "MSISDN";
      break;
  }

  const payload = generate.anyId({
    type: type,
    target: target,
    amount: value !== null && value !== undefined ? value : 0,
  });

  console.log(target, value);
  console.log(payload);

  return payload;
};
