export type RootState = {
  search: {
    search: boolean;
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
