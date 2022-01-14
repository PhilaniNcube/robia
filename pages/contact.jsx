import React from 'react';

export default function MyApp() {
  return (
    <div>
      <div className="py-12 2xl:px-20 px-6 max-w-5xl mx-auto">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-light text-gray-800 text-center text-white font-mont">
            Contact us
          </h1>

          <div className="container mx-auto grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-10 gap-6">
            <div className="bg-white border rounded-md border-gray-200 h-64 flex flex-col items-center">
              <div
                className="w-16 mt-8 h-16 bg-indigo-50 rounded-full flex items-center justify-center"
                role="img"
                aria-label="phone number"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.4503 16.3503C21.2056 16.0897 20.3417 15.3191 18.7536 14.2995C17.1537 13.2711 15.9739 12.6298 15.6354 12.4803C15.6056 12.4671 15.5728 12.4622 15.5404 12.4663C15.508 12.4703 15.4773 12.4831 15.4517 12.5033C14.9065 12.9284 13.9887 13.7094 13.9395 13.7516C13.6217 14.0239 13.6217 14.0239 13.3615 13.9391C12.904 13.7891 11.4828 13.0344 10.2443 11.7931C9.00591 10.5519 8.21231 9.09547 8.06231 8.63844C7.97653 8.37781 7.97653 8.37781 8.24981 8.06C8.292 8.01078 9.07341 7.09297 9.49856 6.54828C9.51873 6.52263 9.53152 6.49197 9.53557 6.45959C9.53962 6.42722 9.53476 6.39435 9.52153 6.36453C9.372 6.02562 8.73075 4.84625 7.70231 3.2464C6.68138 1.65875 5.91169 0.794843 5.65106 0.550155C5.62715 0.527586 5.59758 0.511886 5.56549 0.504709C5.5334 0.497532 5.49997 0.499143 5.46872 0.509374C4.55769 0.822445 3.67869 1.22192 2.84372 1.70234C2.03766 2.17092 1.27455 2.70973 0.563246 3.3125C0.538416 3.33361 0.519801 3.36108 0.509396 3.39196C0.498991 3.42285 0.497189 3.45598 0.504184 3.48781C0.602152 3.94437 1.07043 5.85031 2.52356 8.49031C4.00622 11.1847 5.03372 12.5652 7.21106 14.735C9.38841 16.9048 10.8125 17.9942 13.5097 19.4769C16.1497 20.93 18.0565 21.3987 18.5122 21.4958C18.5441 21.5027 18.5772 21.5009 18.6082 21.4905C18.6391 21.4801 18.6667 21.4615 18.6879 21.4367C19.2906 20.7254 19.8293 19.9623 20.2976 19.1562C20.778 18.3212 21.1774 17.4422 21.4906 16.5312C21.5006 16.5002 21.5022 16.4671 21.4951 16.4353C21.488 16.4035 21.4725 16.3741 21.4503 16.3503Z"
                    fill="#4338CA"
                  />
                </svg>
              </div>
              <p className="text-xl mt-10 font-semibold leading-5 text-center text-gray-800">
                Phone
              </p>
              <p className="text-base mt-4 leading-4 text-center text-gray-600">
                083 295 6515
              </p>
            </div>
            <div className="bg-white border rounded-md border-gray-200 h-64 flex flex-col items-center ">
              <div
                className="w-16 mt-8 h-16 bg-indigo-50 rounded-full flex items-center justify-center "
                role="img"
                aria-label="email"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.0805 7.89188L12.3394 3.07922C12.2338 3.02717 12.1177 3.00009 12 3.00009C11.8823 3.00009 11.7662 3.02717 11.6606 3.07922L1.92188 7.89188C1.79594 7.95315 1.68968 8.04846 1.61512 8.16701C1.54056 8.28556 1.50068 8.42262 1.5 8.56266V20.25C1.50055 20.3491 1.52062 20.4471 1.55907 20.5384C1.59751 20.6298 1.65357 20.7126 1.72405 20.7823C1.79453 20.8519 1.87804 20.907 1.96981 20.9444C2.06159 20.9817 2.15982 21.0006 2.25891 21H21.7411C21.8402 21.0006 21.9384 20.9817 22.0302 20.9444C22.122 20.907 22.2055 20.8519 22.2759 20.7823C22.3464 20.7126 22.4025 20.6298 22.4409 20.5384C22.4794 20.4471 22.4994 20.3491 22.5 20.25V8.56266C22.4995 8.42286 22.46 8.28598 22.3859 8.16745C22.3117 8.04893 22.206 7.95348 22.0805 7.89188ZM12 4.5886L20.1094 8.5936L11.8734 12.6614L3.76406 8.65641L12 4.5886Z"
                    fill="#4338CA"
                  />
                </svg>
              </div>
              <p className="text-xl mt-10 font-semibold leading-5 text-center text-gray-800">
                Email
              </p>
              <p className="text-base mt-4 leading-4 text-center text-gray-600">
                kelly@orbia.co.za
              </p>
            </div>
            <div className="bg-white border rounded-md border-gray-200 h-64 flex flex-col items-center ">
              <div
                className="w-16 mt-8 h-16 bg-indigo-50 rounded-full flex items-center justify-center"
                role="img"
                aria-label="location"
              >
                <svg
                  width="16"
                  height="22"
                  viewBox="0 0 16 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 0.5C3.85953 0.5 0.5 3.52391 0.5 7.25C0.5 13.25 8 21.5 8 21.5C8 21.5 15.5 13.25 15.5 7.25C15.5 3.52391 12.1405 0.5 8 0.5ZM8 11C7.40666 11 6.82664 10.8241 6.33329 10.4944C5.83994 10.1648 5.45542 9.69623 5.22836 9.14805C5.0013 8.59987 4.94189 7.99667 5.05764 7.41473C5.1734 6.83279 5.45912 6.29824 5.87868 5.87868C6.29824 5.45912 6.83279 5.1734 7.41473 5.05764C7.99667 4.94189 8.59987 5.0013 9.14805 5.22836C9.69623 5.45542 10.1648 5.83994 10.4944 6.33329C10.8241 6.82664 11 7.40666 11 8C10.9991 8.79538 10.6828 9.55794 10.1204 10.1204C9.55794 10.6828 8.79538 10.9991 8 11Z"
                    fill="#4338CA"
                  />
                </svg>
              </div>
              <p className="text-xl mt-10 font-semibold leading-5 text-center text-gray-800">
                Address
              </p>
              <p className="text-base mt-4 leading-6 text-center text-gray-600 w-48">
                134 KEMPSTON ROAD, KORSTEN, PORT ELIZABETH, 6020
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
