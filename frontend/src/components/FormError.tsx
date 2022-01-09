import { BiError } from "react-icons/bi";

type AppProps = {
  message?: string;
};

const FormError = ({ message }: AppProps) => {
  return (
    <p className="mb-3 text-red-500 flex items-center gap-1">
      {message && (
        <>
          <BiError className="inline" size="1rem" /> {message}
        </>
      )}
    </p>
  );
};

export default FormError;
