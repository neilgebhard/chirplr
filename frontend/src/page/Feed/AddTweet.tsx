import { UserCircleIcon } from "@heroicons/react/solid";

type Props = {
  handleAddTweet: React.FormEventHandler<HTMLFormElement>;
};

const AddTweet = ({ handleAddTweet }: Props) => {
  return (
    <div className="flex p-4">
      <UserCircleIcon className="h-12 w-12 text-gray-600" />
      <form className="w-full" onSubmit={handleAddTweet}>
        <input
          className="appearance-none placeholder-gray-500 text-xl block w-full outline-none py-3 px-4 mb-3"
          placeholder="What's happening?"
          id="text"
          type="text"
        />
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white text-center border-gray-400 rounded-full py-2 px-4 font-bold block float-right"
          type="submit"
        >
          Tweet
        </button>
      </form>
    </div>
  );
};

export default AddTweet;
