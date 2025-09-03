const EmptyStateIndicator = ({ message }: { message: string }) => {
  return (
    <div className="empty-state">
      <div role="status" aria-live="polite">
        <p className="text-preset-5">{message}</p>
      </div>
    </div>
  );
};

export default EmptyStateIndicator;
