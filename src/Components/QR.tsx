import QRCode from "react-qr-code";

import { genPayload } from "../Modules/qr-generate";

export const GenQR = (props: {
  target?: string | null;
  value?: number | null;
}) => {
  return (
    <div className="w-full h-auto aspect-square">
      <QRCode
        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        value={genPayload(
          props.target !== undefined && props.target !== null
            ? props.target
            : "",
          props.value
        )}
      />
    </div>
  );
};
