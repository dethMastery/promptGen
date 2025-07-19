import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useSearchParams } from "react-router-dom";

import { GenQR } from "../../Components/QR";

export const BillPage = () => {
  const [searchParam] = useSearchParams();
  const navigate = useNavigate();

  const [target, setTarget] = useState<string | null | undefined>();
  const [value, setValue] = useState<number | null | undefined>();

  useEffect(() => {
    if (target === undefined && value === undefined) {
      let targetParam = searchParam.get("order");
      let valueParam = searchParam.get("amount");

      if (targetParam !== undefined) {
        setTarget(targetParam);
      } else {
        setTarget(null);
      }

      if (valueParam !== undefined) {
        setValue(Number(valueParam));
      } else {
        setValue(0);
      }
    } else {
      if (target === null) {
        navigate("/");
      }
    }
  });

  if (target !== undefined && value !== undefined) {
    return (
      <>
        <div className="w-full h-screen flex justify-center items-center">
          <div className="w-[20rem] bg-whitesmoke text-jet p-4 rounded-xl flex flex-col gap-4">
            <div>
              <p className="text-lg">Target: {target}</p>
              <p className="text-lg">Amount: {value}</p>
            </div>
            <div className="w-[70%] mx-auto">
              <GenQR target={target} value={value} />
            </div>
            <div className="w-full">
              <Link
                to="/"
                className="bg-living-coral text-whitesmoke w-full p-4 rounded-xl block text-center hover:opacity-60 hover:scale-95"
              >
                Create another
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    <>
      <div></div>
    </>;
  }
};
