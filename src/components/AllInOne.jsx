import React from "react";
import { CheckIcon } from "@heroicons/react/outline";

const AllInOne = () => {
  return (
    <div name="platforms" className="w-full my-32">
      <div className="max-w-[1240px] mx-auto px-2">
        <h2 className="text-5xl font-bold text-center">Join us today.</h2>
        <p className="text-2xl py-8 text-gray-500 text-center">
          Millions of people trust us to store billions of files using our state
          of the art infrastructure. Join them and protect your data using one
          of the Internet’s most secure cloud and communication providers.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Powerful</h3>
              <p className="text-lg pt-2 pb-4">
                Ours is a cloud based service which can be used from all major
                devices and platforms from anywhere with Internet.
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Privacy</h3>
              <p className="text-lg pt-2 pb-4">
                By properly applying end-to-end encryption, MEGA achieves actual
                privacy by design.
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Secure</h3>
              <p className="text-lg pt-2 pb-4">
                Ours is carefully engineered to achieve the highest level of
                security for its users.
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Transparent</h3>
              <p className="text-lg pt-2 pb-4">
                Ours client apps are Public Source. Its cryptographic
                architecture is specified in a comprehensive Security
                Whitepaper.
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Reliable</h3>
              <p className="text-lg pt-2 pb-4">
                We own and operates its redundant server infrastructure
                directly, ensuring that your data always remains available.
              </p>
            </div>
          </div>

          <div className="flex">
            <div>
              <CheckIcon className="w-7 mr-4 text-green-600" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Generous</h3>
              <p className="text-lg pt-2 pb-4">
                We are one of the most generous cloud services on the Internet,
                with easy ways to expand and extend your free storage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllInOne;
