const EmptyStateIndicator = ({ message }: { message: string }) => {
  return (
    <div className="empty-state">
      <p className="text-preset-5">{message}</p>
    </div>
  );
};

export default EmptyStateIndicator;
