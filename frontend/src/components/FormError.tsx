import { BiError } from "react-icons/bi";

type Props = {
  message?: string;
};

const FormError = ({ message }: Props) => {
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
