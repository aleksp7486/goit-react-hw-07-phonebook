import { LineWave } from 'react-loader-spinner';
import { Box } from 'components/Box';

const Loader = () => {
  return (
    <Box display="flex" justifyContent="center">
      <LineWave color="#34879c" />
    </Box>
  );
};

export default Loader;
