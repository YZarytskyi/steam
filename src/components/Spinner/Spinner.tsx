import { Rings } from 'react-loader-spinner';

export const Spinner = () => {
  return (
    <div
      style={{
        margin: '0 auto',
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Rings
        height="80"
        width="100%"
        color="#003cff"
        radius="6"
        ariaLabel="rings-loading"
      />
    </div>
  );
};
