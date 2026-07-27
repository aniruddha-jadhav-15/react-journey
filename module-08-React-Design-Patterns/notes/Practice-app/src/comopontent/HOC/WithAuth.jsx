function WithAuth(WrappedComponent) {
  return function EnhancedComponent(props) {
    if (!props.isLoogedIn) {
      return <p>Please log in</p>;
    }
    return <WrappedComponent {...props} />;
  };
}

export default WithAuth;
