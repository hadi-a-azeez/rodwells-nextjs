import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const ContactSection = ({ values }) => {
  return (
    <section className="flex flex-col w-full border-r  border-gray-200 hover:bg-gray-100">
      <div className="flex flex-col p-10 gap-3">
        <div className="w-full p-3 bg-[#022675] text-white uppercase font-semibold text-xl">
          {values.title}
        </div>
        <div className="w-full border-t border-gray-200 mt-4" />
        <table className="w-full border-none  text-gray-500">
          <tbody>
            {values.fields.map((field, index) => {
              return (
                <tr key={index}>
                  <td className="p-3 align-left font-medium">{field.label}</td>
                  <td className="p-3 align-left">{field.value}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white">
      {/* Header starts here */}
      <header className="flex justify-between items-center w-full bg-[#022675] py-10 px-10 border-b border-white">
        <a title="Rodwells | A NUTRIEN AG SOLUTIONS BUSINESS" href="#">
          <img
            className="sm:w-[9rem] w-full max-w-[240px] mb-0 "
            src="rodwells-logo.png"
            alt="Rodwells - A Nutrien Ag Solutions Business"
          />
        </a>
        <nav>
          <button className="bg-[#f57d1e] text-white font-semibold uppercase py-2 px-4  hover:bg-white hover:text-[#f57d1e] hover:border hover:border-[#f57d1e]">
            <a
              className="no-underline text-white font-semibold uppercase "
              href="https://www.rodwellsre.com.au/"
            >
              Real Estate
            </a>
          </button>
        </nav>
      </header>
      {/* Header ends here */}

      {/* Banner section starts here */}
      <div className="relative min-h-[37vw] flex justify-center items-center px-[1rem] py-[1.4rem]">
        <div
          className="bg-cover"
          style={{ backgroundImage: "url(/banner.jpg)" }}
        />
        <div className="bg-text">
          Rodwells is a Livestock & Real Estate agency business offering its
          services through operations in 4 locations across Victoria, with
          representatives in Benalla, Euroa, Wodonga and Wagga Wagga. Rodwells
          is a major participant in the Livestock supply chain, with a presence
          3 major selling centers, and access to all major selling centers in
          Vic, SA & NSW. The Rodwells Real Estate business offers clients a
          highly experienced team professionals to handle rural and regional
          Real Estate marketing and transactions. Rodwells can also offer a
          range of specialist services in Livestock Finance, Wool brokerage, &
          Insurance. Rodwells is a diverse agribusiness that has the stated aim
          of providing personal, competitive and efficient service to the rural
          community.
        </div>
      </div>
      {/* Banner section ends here */}

      {/* Contact section starts here */}
      <div className="flex flex-col w-full justify-center items-center mt-10">
        <h2 className="text-5xl font-semibold text-gray-500">KEY CONTACTS</h2>
      </div>

      <div className="grid sm:grid-cols-2 grid-cols-1  w-full mt-8">
        <ContactSection
          values={{
            title: "Benalla",
            fields: [
              { label: "Tel:", value: "5762 7855" },
              { label: "Address:", value: "19 Bridge St Benalla, VIC 3672" },
            ],
          }}
        />
        <ContactSection
          values={{
            title: "COROWA",
            fields: [
              { label: "Contact person:", value: "Adam Roberts" },
              { label: "Tel:", value: "0409 122 388" },
            ],
          }}
        />
        <ContactSection
          values={{
            title: "WAGGA WAGGA",
            fields: [
              { label: "Tel:", value: "02 6921 1700" },
              {
                label: "Address:",
                value: "	154 Fitzmaurice Street, Wagga Wagga NSW",
              },
            ],
          }}
        />
        <ContactSection
          values={{
            title: "EUROA",
            fields: [
              { label: "Tel:", value: "03 5795 2240" },
              { label: "Address:", value: "	31 Binney St, Euroa ViC 3666" },
            ],
          }}
        />
        <ContactSection
          values={{
            title: "WODONGA",
            fields: [
              { label: "Contact Person:", value: "Peter Ruaro" },
              { label: "Tel:", value: "0447 6024 6830" },
              { label: "", value: "02 6024 6830" },
            ],
          }}
        />
      </div>
      {/* Contact section ends here */}

      {/* Footer starts here */}
      <footer className="flex flex-col w-full justify-center items-center mt-10 bg-[#022675] py-5 px-10">
        <div class="flex sm:flex-row flex-col text-sm gap-1">
          Copyright © <span id="year">{new Date().getFullYear()}</span> Rodwells
          Part of the{" "}
          <a
            href="https://www.nutrienagsolutions.com.au/"
            className="hover:underline"
          >
            Nutrien Ag Solutions® Group
          </a>{" "}
          |
          <a
            target="_blank"
            className="hover:underline"
            href="https://www.nutrienagsolutions.com.au/terms-and-conditions-privacy-policy"
          >
            Terms of Use
          </a>{" "}
          |
          <a
            target="_blank"
            className="hover:underline"
            href="https://www.nutrienagsolutions.com.au/terms-and-conditions-privacy-policy"
          >
            Privacy and Security
          </a>
        </div>
      </footer>
      {/* Footer ends here */}
    </div>
  );
}
