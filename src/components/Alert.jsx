function Alert({ altMsg, mark, onSelectItem, children }) {
  const hell = "Alert";

  return (
    <div
      className="alert alert-primary"
      role="alert"
      onClick={() => {
        onSelectItem(hell);
      }}
    >
      {children}
    </div>
  );
}

export default Alert;
