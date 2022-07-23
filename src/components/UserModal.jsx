import axios from "axios";
import React, { useEffect, useState } from "react";

const UserModal = ({ show, setShow, url }) => {
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadUser = async () => {
      setLoading(true);
      const res = await axios.get(url);
      setDetails(res.data);
      setLoading(false);
    };
    loadUser();
  }, [url]);
  return (
    <div>
      <div
        className={`fixed z-10 overflow-y-auto top-0 w-full left-0 ${
          show ? "" : "hidden"
        }`}
      >
        <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity">
            <div className="absolute inset-0 bg-gray-900 opacity-75" />
          </div>
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen">
            &#8203;
          </span>
          <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all w-3/4 px-12 py-8">
            {loading ? (
              "Loading..."
            ) : (
              <>
                <div className="flex justify-between py-4 items-center">
                  <h1 className="text-xl">{details?.name}</h1>
                  <div>
                    <h4 className="text-lg font-semibold">Terrain</h4>
                    <p>{details?.terrain}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Population</h4>
                    <p>{details?.population}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold">Climate</h4>
                    <p>{details?.climate}</p>
                  </div>
                  <div>
                    <button
                      type="button"
                      className="px-8 py-2 rounded-full bg-red-400 text-white"
                      onClick={() => setShow(!show)}
                    >
                      Hide Details
                    </button>
                  </div>
                </div>
                <div className="flex">
                  <h4 className="text-lg w-1/4 font-medium mr-6">Rotation period</h4>
                  <div>{details?.rotation_period}</div>
                </div>
                <div className="flex">
                  <h4 className="text-lg w-1/4 font-medium mr-6">Orbital period</h4>
                  <div>{details?.orbital_period}</div>
                </div>
                <div className="flex">
                  <h4 className="text-lg w-1/4 font-medium mr-6">Diameter</h4>
                  <div>{details?.diameter}</div>
                </div>
                <div className="flex">
                  <h4 className="text-lg w-1/4 font-medium mr-6">Gravity</h4>
                  <div>{details?.gravity}</div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
