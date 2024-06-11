import React from "react";
import Image from "next/image";
import me from "../assets/images/me6.jpg";
import logo from "../assets/svg/design_1/logo-no-background.svg";

export default function Version1() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
        <div className="max-w-xs md:max-w-2xl lg:max-w-4xl">
          <Image className="mx-auto h-20 " src={logo} alt="" />
          <figure className="mt-10">
            <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-3xl sm:leading-9">
              <p>
                “They say good things take time that&apos;s why I&apos;m always late.”
              </p>
            </blockquote>
            <figcaption className="mt-7">
              <Image
                className="mx-auto h-10 w-10 rounded-full"
                src={me} // Use the 'me' image here
                alt="Your Image Alt Text"
              />
              <div className="text-sm mt-6 flex items-center justify-center space-x-3 md:text-xl lg:text-base">
                <div className="font-semibold text-gray-900">
                  Nontaphat Pongpis
                </div>
                <svg
                  viewBox="0 0 2 2"
                  width={3}
                  height={3}
                  aria-hidden="true"
                  className="fill-gray-900"
                >
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-gray-600">Software Developer</div>
              </div>
            </figcaption>
          </figure>
        </div>
        <div>
          <a
            href="https://github.com/f16f16f16f16"
            className="mt-6 flex items-center justify-center space-x-3 text-base"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-6 w-6 fill-slate-900 md:h-8 md:w-8 lg:h-10 lg:w-10"
            >
              <path
                d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
              ></path>
            </svg>
            <p className="text-xs text-black md:text-base lg:text-sm">&lt;-- Feel free to examine my GitHub profile!</p>
          </a>
        </div>
    </div>
  );
}