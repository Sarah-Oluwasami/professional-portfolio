import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div className="ml-80 mt-8">
      <blockquote className=" text-[3rem] font-bold text-green-100 tracking-wide font-sans mb-6">
        <h1 className="">Contact Us.</h1>
      </blockquote>

      <section className="text-white">
        <div className="mb-6">
          <form action="" className="mt-12 ">
            <blockquote>
              <br />
              <input
                type="name"
                placeholder="Name"
                className="border-[1px] px-4 rounded-md border-zinc-100 transition duration-500 bg-[#aac7c500] hover:border-zinc-300 mr-4 w-[47rem] h-12 "
              />
            </blockquote>

            <blockquote>
              <br />
              <input
                type="email"
                placeholder="Email"
                className=" border-[1px] px-4 rounded-md border-zinc-100 transition duration-500 bg-[#aac7c500] hover:border-zinc-300 w-[47rem] h-12"
              />
            </blockquote>

            <blockquote className="">
              <br />
              <textarea
                className="border-[1px] p-4 rounded-md border-zinc-100 bg-[#aac7c500] transition duration-500 hover:border-zinc-300"
                placeholder="Message"
                name="message"
                rows="6"
                cols="96"
              ></textarea>
            </blockquote>

            <button className="bg-[#aac7c5] text-sm text-zinc-800 tracking-wide rounded-md mt-9  px-10 py-4 ">
              Send message
            </button>
          </form>
        </div>
      </section>

      <blockquote className="space-x-4 mt-9">
        <Link to={"/"} className="text-md text-zinc-300 hover:border-b-2">
          Go Back Home
        </Link>
        <FontAwesomeIcon
          icon={faArrowRight}
          className="icon text-white animate-bounceX"
        />
      </blockquote>
    </div>
  );
}

export default Contact;
