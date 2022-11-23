type StatusProps = {
  status: "loading" | "success" | "error";
};
export const Status = (props: StatusProps) => {
  let message;
  props.status === "loading"
    ? (message = "Loading stuf...")
    : props.status === "success"
    ? (message = "Data Fetched Successfully")
    : (message = "Error Fetching Data");

  return (
    <div>
      <h1>Status : {message}</h1>
    </div>
  );
};
