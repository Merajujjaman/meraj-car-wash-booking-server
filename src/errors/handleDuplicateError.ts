/* eslint-disable @typescript-eslint/no-explicit-any */

const handleDuplicateError = (err: any) => {
  const match = err.message.match(/"([^"]*)"/);
  const simpleMessage = match && match[1];

  const simplifiedError = [
    {
      path: "",
      message: `${simpleMessage} is already exists`,
    },
  ];

  const statusCode = 500;

  return {
    statusCode,
    message: "Maybe you can not post duplicate",
    simplifiedError,
  };
};

export default handleDuplicateError;
