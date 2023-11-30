import { useStoreContext } from "../../utils/store";

function Footer() {
  const [state, dispatch] = useStoreContext();

  return (
    <footer className="mt-2">
      <div className="text-white flex flex-col md:flex-row justify-center md:justify-between items-center mx-auto px-2">
        {/* Contact Information */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h3 className="underline">Contact Us:</h3>
          <ul>
            <li>Phone: {state.company?.phone}</li>
            <li>Email: {state.company?.email}</li>
            <li>Address: {state.company?.address.street}, {state.company?.address.city}, {state.company?.address.state}, {state.company?.address.postalCode}</li>
          </ul>
        </div>

        {/* Centered Logo */}
        <div className="flex items-center justify-center md:mr-40">
          <img src={`/images/${state.company?.image}`} alt="logo-ct" className="w-10" />
        </div>

        {/* Copyright */}
        <div className="mt-20 text-center md:text-left">
          <p className="text-white italic font-normal mt-4 md:mt-0">
            &copy; 2023 Urban Vogue
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer