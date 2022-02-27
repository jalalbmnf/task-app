import { FC } from "react";

const Loading: FC = () => {
  return (
    <div className="flex justify-center items-center w-full h-full fixed top-0 left-0">
      <div className="w-16 h-16 border-4 border-info-700 border-solid rounded-full animate-spin border-t-transparent"></div>
    </div>
  );
};

export default Loading;
