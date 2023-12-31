const EmptyState = () => {
  return (
    <div className="flex items-center justify-center h-full px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center text-center">
        <h3 className="mt-2 text-xl font-semibold text-gray-100">
          Select a chat or start a new conversation
        </h3>
      </div>
    </div>
  );
};
export default EmptyState;
