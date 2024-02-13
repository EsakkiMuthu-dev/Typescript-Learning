type Loading = {
  loadingText: string;
  isLoading: boolean;
};

type Success = {
  successText: string;
  isSuccess: boolean;
};

type Failed = {
  errorText: string;
  isError: boolean;
};

type ApplicationState = Loading | Success | Failed;

var state: ApplicationState = { successText: "Hurray", isSuccess: true };

if (typeof state === "Success") {
  console.log("SuperB!! Success state: successText =", state.successText);
} else if (isOfType<Loading>(state)) {
  console.log("Loading state: loadingText =", state.loadingText);
} else if (isOfType<Failed>(state)) {
  console.log("Failed state: errorText =", state.errorText);
}
