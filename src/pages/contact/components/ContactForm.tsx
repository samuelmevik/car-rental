import { MdPhoneInTalk } from "react-icons/md";
import PrimaryButton from "../../../components/ui/PrimaryButton";
import { FaPaperPlane } from "react-icons/fa";

function ContactForm() {
  return (
    <div className="grid sm:grid-cols-2 gap-10">
      <div>
        <h1>Looking for more details?</h1>
        <p>A solitary feather floated, suspended in the stillness of the night, embodying the paradox of eternal transience. It was here, in the realm where logic takes flight and reason bows to the sublime absurdity of existence, that the clockwork of the universe sighed, content in the knowledge that it need never make sense to be beautiful.</p>
        <p className="font-semibold text-xl flex items-center gap-2 pl-3 pt-1"><MdPhoneInTalk /> (+46)-123-456</p>
        <p className="font-semibold text-xl flex items-center gap-2 pl-3 pt-1"><FaPaperPlane /> Kalmar, Sweden</p>
      </div>
      <form className="flex flex-col gap-3 sm:pt-4">
        <h2>Give us your feedback!</h2>
        <div>
          <p>Your name:</p>
          <Input placeholder="E.G: Barack Obama" />
        </div>
        <div>
          <p>Your email:</p>
          <Input placeholder="E.G: barack.obama@gmail.com" type="email" />
        </div>
        <div className="flex-1 flex flex-col">
          <p>Tell us about it:</p>
          <textarea  placeholder="Message..." className="flex-1 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5" />
        </div>
        <PrimaryButton className="w-24 self-end" text="Send" />
      </form>
    </div>
  )
}

function Input({ placeholder, type = "text" }: { placeholder: string, type?: string }) {
  return (
    <input type={type} placeholder={placeholder} className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5" />
  );
}

export default ContactForm;