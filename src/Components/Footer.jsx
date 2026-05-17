import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faXTwitter} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="relative">
      <div className=" h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />


      <div className="absolute inset-0 -z-10 bg-[#133C55]" />


      <div
        className="absolute inset-0 -z-10 bg-linear-to-tr 
        from-purple-500/10 dark:to-blue-500/10 blur-3xl"
      />


      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          <div className="space-y-4">
            <div className="flex items-center gap-2">

              <h2 className="text-xl font-semibold tracking-tight text-[#91E5F6]">
                SkillSphere
              </h2>
            </div>

            <p className="text-sm leading-relaxed text-white max-w-xs">
               Join our courses to enrich your skills, knowledge and life.
            </p>
          </div>


          <div>
            <h3 className="text-sm font-semibold text-[#91E5F6] mb-4">
              Course Category
            </h3>
            <ul className="space-y-3 text-sm text-white">
              <li>
                <Link
                  href="/generate"
                  className="hover:text-[#84D2F6] transition"
                >
                  Programming
                </Link>
              </li>
              <li>
                <Link
                  href="/all-photos"
                  className="hover:text-[#84D2F6] transition"
                >
                  Business Management
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="hover:text-[#84D2F6] transition"
                >
                  Creative Arts
                </Link>
              </li>
            </ul>
          </div>


          <div>
            <h3 className="text-sm font-semibold text-[#91E5F6] mb-4">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-white">
              <li>
                <Link
                  href="/policy"
                  className="hover:text-[#84D2F6] transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#84D2F6] transition"
                >
                  Contact Info
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-[#84D2F6] transition"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>


          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-[#91E5F6]">
              Start creating
            </h3>

            <p className="text-sm text-white">
              Start the exciting journey today.
            </p>



            <div className="flex gap-4 text-2xl text-[#84D2F6]">
                          <Link
              href="/facebook"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </Link>
                          <Link
              href="/instagram"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </Link>
                          <Link
              href="/x"
            >
              <FontAwesomeIcon icon={faXTwitter} />
            </Link>

            </div>
          </div>
        </div>


        <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-white/10" />


        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} SkillSphere. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-white transition"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-white transition"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;