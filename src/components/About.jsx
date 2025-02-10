import React from "react";

const About = () => {
  return (
    <>
      <div
        name="About"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <div>
          <h1 className="text-3xl font-bold mb-5">About</h1>
          <p>
            Hello, I'm Ahmed, a passionate Java developer with a strong
            foundation in Java, Spring, and RESTful APIs. I enjoy solving
            problems and building efficient software solutions. As a quick
            learner and team player, I’m eager to grow and contribute in a
            collaborative environment.
          </p>
          <br />
          <h1 className="text-green-600 font-semibold text-xl">Education</h1>
          <hr />

          <div className="flex justify-between my-2">
            <div className="flex flex-col">
              <h1 className="text-2xl">BSc-Information Technology</h1>
              <p className="">
                SPDT College <span>(Mumbai University)</span>
              </p>
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl">2022-2025</h1>
              <p className="">9.3/10 CGPA</p>
            </div>
          </div>

          <br />
          <br />
          <h1 className="text-green-600 font-semibold text-xl">Skills</h1>
          <hr />
          <p className="my-2">
            <ul>
              <li className="">
                Front-end:{" "}
                <span  className="text-amber-200">
                  HTML, CSS, TilwindCSS, Bootstrap, JavaScript, ReactJS
                </span>
              </li>
              <li className="">
                Back-end: <span  className="text-amber-200">Java, SpringBoot, Hibernate</span>{" "}
              </li>
              <li className="">
                Database: <span  className="text-amber-200">MySQL</span>
              </li>
              <li className="">
                Tools: <span  className="text-amber-200">Git, GitHub, Postman</span>
              </li>
            </ul>
          </p>
          <br />
          <br />
          {/* <h1 className="text-green-600 font-semibold text-xl">
            Professional Experience
          </h1>
          <span>
            [Job Title], [Company/Organization], [Dates] [Brief description of
            responsibilities and achievements] [Job Title],
            [Company/Organization], [Dates] [Brief description of
            responsibilities and achievements] [Freelance/Contract Work],
            [Client/Organization], [Dates] [Brief description of projects and
            contributions]
          </span>
          <br />
          <br />
          <h1 className="text-green-600 font-semibold text-xl">
            Achievements & Awards
          </h1>
          <span>
            [Award/Recognition], [Organization/Institution], [Year]
            [Achievement], [Organization/Platform], [Year]
          </span>
          <br />
          <br />
          <h1 className="text-green-600 font-semibold text-xl">
            Mission Statement
          </h1>
          <p>
            My mission is to leverage my skills and creativity to deliver
            innovative [Your Field] solutions that exceed client expectations
            and contribute positively to the digital landscape. I am committed
            to continuous learning and growth, always seeking new challenges and
            opportunities to expand my horizons.
          </p> */}
        </div>
      </div>
      <hr />
    </>
  );
};

export default About;
