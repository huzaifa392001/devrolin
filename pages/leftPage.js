const LeftPage = () => {
    const style = {
      display: 'flex',
      justifyContent: 'center', // Center horizontally
      alignItems: 'center', // Center vertically
      height: '100vh', // Full height of the viewport
      textAlign: 'center',
      flexDirection: 'column', // Aligns text to be vertical in column
    };
  
    return (
      <div style={style}>
        <h1>This is the Left Page</h1>
      </div>
    );
  };
  
  export default LeftPage;
  