function DeleteButton({ id }: { id: string }) {
  return (
    <form>
      <button
        type="submit"
        className="bg-red-500 text-white text-xs rounded p-2"
      >
        delete
      </button>
    </form>
  );
}
export default DeleteButton;
