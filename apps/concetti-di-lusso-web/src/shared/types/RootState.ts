export type RootState = {
  search: {
    searching: boolean;
    value: string;
  };
  searchAnimations: {
    input: {
      animationRun: boolean;
    };
  };
  pageAnimations: {
    page: {
      animationRun: boolean;
    };
  };
};
