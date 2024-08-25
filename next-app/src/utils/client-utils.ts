import "client-only";
export const clientSideFunction = (): string => {
  console.log(
    `Use window object,
          use localStorage,
         `
  );

  return "client result";
};
