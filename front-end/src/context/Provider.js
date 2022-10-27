import Context from './Context';

function Provider() {
  return (
    <Context.Provider>
      {children}
    </Context.Provider>
  );
}

export default Provider;
