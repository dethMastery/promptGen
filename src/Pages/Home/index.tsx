export const HomePage = () => {
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-[20rem] bg-whitesmoke text-jet p-4 rounded-xl flex flex-col gap-4">
          <form
            action="/bills"
            method="get"
            className="w-[70%] mx-auto flex flex-col gap-2"
          >
            <input
              type="text"
              name="order"
              placeholder="Phone No. / NDID"
              className="w-full border-b-2 p-2 border-jet border-solid text-jet hover:border-living-coral focus:border-living-coral outline-0 ring-0 text-center"
              required
            />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              className="w-full border-b-2 p-2 border-jet border-solid text-jet hover:border-living-coral focus:border-living-coral outline-0 ring-0 text-center"
            />
            <button
              type="submit"
              className="bg-living-coral text-whitesmoke py-4 mt-2 rounded-xl hover:opacity-60 hover:cursor-pointer hover:scale-95"
            >
              Create
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
