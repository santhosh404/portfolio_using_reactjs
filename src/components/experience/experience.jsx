import React from "react";
import Navbar from "../home/navbar";
import Footer from "../home/Footer";
import techhive from "../../assets/techhive.svg";
import pillir from "../../assets/pillir logo.png";
import { Container } from "@chakra-ui/react";

export default function Projects(props) {
  return (
    <div>
      <Navbar page={props.page} />
      <Container maxW={"1200px"}>
        {/* Experience 1 */}
        <div className="flex flex-col gap-5">
          <div className="flex gap-3">
            <img src={techhive} alt="Tech Hive Logo" />
            <div className="flex flex-col">
              <h1 className="mt-2">Tech Hive Technologies Private Limited (Freelancing) </h1>
              <p className="text-left text-sm">November 2023 - Present</p>
            </div>
          </div>

          <div>
            <ul className="list-disc ml-6 text-justify" style={{ width: "700px" }}>
              <li>Developed the admin dashboard for cab booking application with the UI
                received in Figma.</li>
              <li>In Dashboard, The admin can manage the trips booked from various modes
                like mobile apps, website and admin can also create new trip through
                dashboard.

              </li>
              <li>Admin can also manage the drivers registered, for taking the trip. For taking
                the trip, the driver must be verifed by the admin.
              </li>
              <li>Dashboard also consists of management of driver's wallet amount.</li>
              <li>Admin can also manage the Fare amount. He can increase the fare amount on
                occassional festivals
              </li>
              <li>Developed reusable components like table, button, input, select etc,</li>
              <li>Integrated the api's with the help of axios.</li>
            </ul>
          </div>
        </div>

        {/* Experience 2 */}
        <div className="flex flex-col gap-5 mt-10">
          <div className="ml-auto">
            <div className="flex gap-3 mb-3">
              <img src={pillir} alt="Pillir Logo" height={"20px"} width={"120px"} />
              <div className="flex flex-col">
                <h1 className="mt-2">Pillir (Formerly appsFreedom India Private Limited) </h1>
                <p className="text-left text-sm">April 2022 - Present</p>
              </div>
            </div>
            <div>
              <ul className="list-disc ml-6 text-justify" style={{ width: "700px" }}>
                <li>Build the tool for running the bulk automation scripts using React JS and APIs
                  are build in express.js.</li>
                <li>The tool can create new test run with respect to project, suite, runs which is
                  already exists in Test-rail (Test case maintanance platform) by using the testrail
                  API's which provided by Testrail.
                </li>
                <li>Run the newly created test run with automation scripts written using Cypress,
                  which may consist hundreds of cases .
                </li>
                <li>Status of each cases (Passed, failed, etc) are added to Test-rail with screenshots
                  instantly after each case is executed.</li>
                <li>Developed front-end of B2B applications with low code platform and
                  Integrated it with Backend which can be compatible to all devices like android,
                  ios, web.
                </li>
                <li>Automated test cases using JS testing framework called Cypress.
                </li>
              </ul>
            </div>
          </div>
        </div>

      </Container>

      <Footer />
    </div>
  );
}
