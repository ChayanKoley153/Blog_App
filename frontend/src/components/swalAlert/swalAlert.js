import Swal from "sweetalert2";

export const confirmDeleteAlert = async () => {
  return await Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  });
};

export const successAlert = async (
  title = "Success",
  text = "Operation completed successfully",
) => {
  return await Swal.fire({
    title,
    text,
    icon: "success",
  });
};

export const errorAlert = async (
  title = "Error",
  text = "Something went wrong",
) => {
  return await Swal.fire({
    title,
    text,
    icon: "error",
  });
};
