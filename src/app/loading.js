import { Progress } from "@nextui-org/react";

const loading = () => {
  return (
    <div className="h-screen grid place-items-center">
      <Progress
        size="sm"
        color="success"
        isIndeterminate
        aria-label="Loading..."
        className="max-w-md"
      />
    </div>
  );
};

export default loading;
