function WithLooding(WrappedComponent) {
  return function EnhancedComponent(props) {
    if (props.isLoading) {
      return <p>Loading...</p>;
    }
    return <WrappedComponent {...props} />;
  };
}

export default WithLooding;
